import { JsonDB } from "node-json-db";
import { Config } from "node-json-db/dist/lib/JsonDBConfig.js";

const cityDB = new JsonDB(new Config("cities", true, true, "/"));
const userDB = new JsonDB(new Config("users", true, true, "/"));

const db = new Map();
db.set("city", cityDB);
db.set("user", userDB);

const save = async (dbName,data) => db.get(dbName).push("/data[]", data, true);

const getAll = async (dbName) => db.get(dbName).getData("/");

async function repository(fastify){
    fastify.decorate("repository", { getAll, save });
}

repository[Symbol.for('skip-override')] = true

export default repository;

