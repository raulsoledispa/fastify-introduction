import Schema from "fluent-json-schema";
//import { save, getAll } from "../plugins/repository.mjs";
const citySchema = {
    /*
    * response..
    * body...
    * params...
    * queryStream...
    * headers...
    * */
    body: Schema.object()
        .prop("name", Schema.string().required())
        .prop("zipCode", Schema.string().required())
        .additionalProperties(false)
}

const DB_NAME = "city";

async function routes(fastify) {
    fastify.get("/cities", async(req,
                               reply) => {
        try {
            const city = await fastify.repository.getAll(DB_NAME);                
            console.log(city)
            reply.send(city);
        } catch (error) {
            console.log(error)
        }
    });

    fastify.post("/cities", { schema: citySchema} , async(req,
                                 reply) => {
        await fastify.repository.save(DB_NAME, req.body)
        reply.send({ message : "City created", data: req.body})
    });
}

export default routes;
