//import { save, getAll } from "../plugins/repository.mjs";

const DB_NAME = "user";
async function routes(fastify){
    fastify.get("/users", async(req,reply) =>{
        const users = await fastify.repository.getAll(DB_NAME);
        reply.send(users);
    })
}

export default routes;
