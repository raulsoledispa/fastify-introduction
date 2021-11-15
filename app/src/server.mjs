import BuildServer from "./index.mjs";

const server = BuildServer();
const start = async () => {
    try {
        await server.listen(3000);
        server.log.info(server.printRoutes())
    }catch (error){
        server.log.error(`Error initializing server ${error.message}`)
    }
}

start();
