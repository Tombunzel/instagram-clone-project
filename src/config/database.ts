import Database from "better-sqlite3";
import path from "path";
import fs from "fs";

const dbPath = path.resolve("config", "../data/instagram.db");
const schemaPath = path.resolve("config", "../data/schema.sql");

const db = Database(dbPath);

const initializeDatabase = () => {
  const schema = fs.readFileSync(schemaPath, "utf8");
  db.exec(schema);
};

export default db;
