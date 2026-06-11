import { Client, isFullDatabase } from "@notionhq/client";
import { config } from "dotenv";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

config({ path: path.join(__dirname, "../.env") });

const notion = new Client({ auth: process.env.NOTION_API_KEY });

const getDatabaseById = async (database_id) => {
  const { data_sources } = await notion.databases.retrieve({ database_id });
  return await notion.dataSources.query({ data_source_id: data_sources[0].id });
};

const formatContacts = (arr) => {
  const map = new Map();
  for (let entry of arr) {
    map.set(entry.id, {
      id: entry.id,
      name: entry.properties.Name.title[0].plain_text,
      alias: entry.properties.Alias.rich_text[0].plain_text,
      email: entry.properties.Email.formula.string,
      phone: entry.properties["Phone Number"].formula.string,
      role: entry.properties["Role in Wedding"].select.name,
      schedule: [],
      notes: entry.children.map(
        (child) => child.paragraph?.rich_text[0]?.text.content,
      ),
    });
  }
  return map;
};

const getChildren = async (arr) => {
  const ret = [];
  for (let a of arr) {
    let nextCursor;
    let children = [];
    while (nextCursor !== null) {
      const { results, next_cursor } = await notion.blocks.children.list({
        block_id: a.id,
        start_cursor: nextCursor,
        page_size: 50,
      });
      children = [...children, ...results];
      nextCursor = next_cursor;
    }
    ret.push({ ...a, children });
  }
  return ret;
};

// const outputPath = path.join(__dirname, "../src/json/schedule.json");
// fs.writeFileSync(outputPath, JSON.stringify(schedule, null, 2), "utf8");
const getContacts = async () => {
  const databaseId = "300de2a9-1181-8014-a917-d25b5b0ab5ee";
  const { results } = await getDatabaseById(databaseId);
  const contacts = await getChildren(results);
  return contacts;
};

const getSchedule = async () => {
  const databaseId = "283de2a91181803980b8f47f513e5014";
  const { results } = await getDatabaseById(databaseId);
  return results;
};

const format = (schedule) => {
  const arr = [];
  for (let task of schedule) {
    const opsObj = task.properties["Wedding Ops"].relation;
    const assignees = [];
    for (let assignee of opsObj) {
      assignees.push(assignee.id);
      // map.get(assignee.id).schedule.push({
      //   task: task.properties.Name.title[0].plain_text,
      //   start: task.properties.Day.date?.start,
      //   end: task.properties.Day.date?.end,
      // });
    }
    arr.push({
      task: task.properties.Name.title[0].plain_text,
      start: task.properties.Day.date?.start,
      end: task.properties.Day.date?.end,
      assignees,
    });
  }
  return arr;
};

const init = async () => {
  const contacts = [...formatContacts(await getContacts()).values()];
  const schedule = format(await getSchedule());
  // const ops = format(contacts, schedule);
  const scheduleOutput = path.join(__dirname, "../src/json/schedule.json");
  const contactsOutput = path.join(__dirname, "../src/json/contacts.json");
  fs.writeFileSync(scheduleOutput, JSON.stringify(schedule, null, 2), "utf8");
  fs.writeFileSync(contactsOutput, JSON.stringify(contacts, null, 2), "utf8");
};

init();
