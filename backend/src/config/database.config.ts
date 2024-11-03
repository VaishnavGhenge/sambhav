import { drizzle } from "drizzle-orm/neon-serverless";
import settings from "./settings";
import { neon } from "@neondatabase/serverless";

const sql = neon(settings.db.url);
// @ts-ignore
const db = drizzle({ client: sql });

const testDbConnection = async () => {
  try {
    await sql`SELECT 1`;
    console.log(`Connected to database ${settings.db.name} on ${settings.db.host}`);
  } catch (error) {
    console.log("Error connecting database, see error details below: ");
    console.error(error);
  }
};

void testDbConnection();

export default db;