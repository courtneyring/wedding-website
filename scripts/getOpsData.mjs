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

async function getPageContent(pageId) {
  // Get page properties (metadata)
  const page = await notion.pages.retrieve({ page_id: pageId });

  // Get the actual content blocks (paragraphs, headings, lists, etc.)
  const blocks = await getAllBlocks(pageId);

  return blocks;
}

// Notion paginates block children, so this handles that
async function getAllBlocks(blockId) {
  const blocks = [];
  let cursor;

  do {
    const response = await notion.blocks.children.list({
      block_id: blockId,
      start_cursor: cursor,
      page_size: 100,
    });

    blocks.push(...response.results);
    cursor = response.has_more ? response.next_cursor : undefined;
  } while (cursor);

  // Recursively fetch children of nested blocks (toggles, nested lists, etc.)
  for (const block of blocks) {
    if (block.has_children) {
      block.children = await getAllBlocks(block.id);
    }
  }
  return blocks.map((child) => child.paragraph?.rich_text[0]?.text.content);
}

const formatContacts = (arr) => {
  const map = new Map();
  for (let entry of arr) {
    const alias = entry.properties.Alias.rich_text[0]?.plain_text;
    map.set(entry.id, {
      id: entry.id,
      name: entry.properties.Name.title[0]?.text.content,
      alias,
      email: entry.properties.Email.formula.string,
      phone: entry.properties["Phone Number"].formula.string,
      image: `/images/ops/${alias}.png`,
      title: entry.properties.Title.rich_text[0]?.plain_text,
      role: entry.properties["Role in Wedding"].select?.name || "Unset",
      // role: entry.properties.Groups.select?.name || "",
      schedule: [],
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
  // const map = new Map(contacts.map((val) => [val.id, val]));
  // return map;
};

const getSchedule = async () => {
  const databaseId = "283de2a91181803980b8f47f513e5014";
  const { results } = await getDatabaseById(databaseId);
  return results;
};

const format = async (schedule, contacts) => {
  const arr = [];
  for (let task of schedule) {
    const opsObj = task.properties["Wedding Ops"].relation;
    const assignees = [];
    for (let assignee of opsObj) {
      assignees.push({
        id: assignee.id,
        name: contacts.get(assignee.id).name,
        alias: contacts.get(assignee.id).alias,
      });
      // map.get(assignee.id).schedule.push({
      //   task: task.properties.Name.title[0].plain_text,
      //   start: task.properties.Day.date?.start,
      //   end: task.properties.Day.date?.end,
      // });
    }

    arr.push({
      title: task.properties.Name.title[0]?.plain_text,
      startTime: task.properties.Day.date?.start,
      endTime: task.properties.Day.date?.end,
      location: task.properties.Location.rich_text[0]?.text.content,
      notes: await getPageContent(task.id),
      assignees,
    });
  }
  return arr;
};

const connectSchedules = (contacts, schedule) => {
  for (let event of schedule) {
    const { assignees } = event;
    const cleanEvent = { ...event };
    delete cleanEvent.assignees;
    for (let assignee of assignees) {
      contacts.get(assignee.id).schedule.push(cleanEvent);
    }
  }
  return [...contacts.values()];
};

const init = async () => {
  const contacts = formatContacts(await getContacts());

  const scheduleRaw = await getSchedule();
  const schedule = await format(scheduleRaw, contacts);
  const contactsWithSchedules = connectSchedules(contacts, schedule);
  // console.log(contactsWithSchedules)
  // const ops = format(contacts, schedule);
  const fileNames = [
    {
      data: schedule,
      path: "../src/json/schedule.json",
    },
    {
      data: scheduleRaw,
      path: "../src/json/scheduleRaw.json",
    },
    { data: contactsWithSchedules, path: "../src/json/contacts.json" },
  ];

  fileNames.forEach((file) =>
    fs.writeFileSync(
      path.join(__dirname, file.path),
      JSON.stringify(file.data, null, 2),
      "utf8",
    ),
  );
};

init();
