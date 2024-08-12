import { createConnection } from "mysql";
import { DB_HOST, DB_PASS, DB_USER } from "../src/Constants/DbConstants.js";

export const Dbconnection = createConnection({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASS,
});
