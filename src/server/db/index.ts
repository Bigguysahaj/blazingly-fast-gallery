import { drizzle } from "drizzle-orm/node-postgres";
import { sql } from "@vercel/postgres";

import { env } from "~/env";
import * as schema from "./schema";

// Use this object to send drizzle queries to the db
export const db = drizzle( sql, { schema });

