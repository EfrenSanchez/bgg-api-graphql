const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const resolvers = require("./api/resolvers");
const typeDefs = require("./api/typeDefs");

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();

(async () => {
    await server.start();
    server.applyMiddleware({ app });
    app.listen({ port: 4000 }, () => console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`));
})();
