import Schema from "fluent-json-schema";

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


async function routes(fastify) {
    fastify.get("/cities", async(req,
                               reply) => {
        reply.send({ message : "Hello from fastify"})
    });

    fastify.post("/cities", { schema: citySchema} , async(req,
                                 reply) => {
        reply.send({ message : "City created", data: req.body})
    });
}

export default routes;
