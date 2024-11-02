import { drizzle } from "drizzle-orm/neon-serverless";
import settings from "./settings";
import { neon } from "@neondatabase/serverless";

const sql = neon(settings.db.url);
// @ts-ignore
const db = drizzle({ client: sql });

const testDbConnection = async () => {
  try {
    await sql`SELECT 1`;
    console.log("Database connected!");
  } catch (error) {
    console.log(error);
  }
};

void testDbConnection();

export default db;