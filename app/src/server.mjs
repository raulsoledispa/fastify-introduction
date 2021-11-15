import Fastify from "fastify";

const app = Fastify({
    logger:{
        prettyPrint: true
    }
});

app.get("/greeting", async(req,
                           reply) => {
    reply.send({ message : "Hello from fastify"})
})

await app.listen(3000);
