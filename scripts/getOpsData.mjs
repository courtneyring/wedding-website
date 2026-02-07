import { Client, isFullDatabase } from "@notionhq/client";
import { config } from "dotenv";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

config({ path: path.join(__dirname, "../.env") });

console.log(process.env.NOTION_API_KEY);
const notion = new Client({ auth: process.env.NOTION_API_KEY });
const weddingOpsDbId = "300de2a911818014a917d25b5b0ab5ee";
const dataSourceId = "300de2a9-1181-80ef-a0eb-000bf6588e59";

const getDatabaseById = async (data_source_id) => {
  return await notion.dataSources.query({ data_source_id });
};

const getPageById = async (page_id) => {
  return await notion.pages.retrieve({ page_id });
};

const formatOutput = (arr) => {
  return arr.map((entry) => ({
    name: entry.properties.Name.title[0].plain_text,
    email: entry.properties.Email.formula.string,
    phone: entry.properties["Phone Number"].formula.string,
    role: entry.properties["Role in Wedding"].select.name,
  }));
};

const getData = async () => {
  const contacts = await getDatabaseById(dataSourceId);
  const out = formatOutput(contacts.results);
  const rawPath = path.join(__dirname, "../src/json/raw.json");
  const outputPath = path.join(__dirname, "../src/json/ops.json");
  fs.writeFileSync(rawPath, JSON.stringify(contacts, null, 2), "utf8");
  fs.writeFileSync(outputPath, JSON.stringify(out, null, 2), "utf8");
};

getData();
