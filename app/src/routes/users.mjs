async function routes(fastify){
    fastify.get("/users", async(req,reply) =>{
        reply.send({ message: "Hello from users"})
    })
}

export default routes;
