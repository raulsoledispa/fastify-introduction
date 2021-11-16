import Fastify from "fastify";

function buildServer(){
    const app = Fastify({
        logger: {
            prettyPrint: true
        }
    });

    app.register(import("./plugins/repository.mjs"))

    app.register(import("./routes/cities.mjs"), {
        prefix: "v1"
    });

    app.register(import("./routes/users.mjs"), {
        prefix: "v1"
    })

    return app;

}

export default buildServer;
