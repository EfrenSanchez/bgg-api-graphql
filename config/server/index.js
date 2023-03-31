const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const resolvers = require("../../api/graphql/resolvers");
const typeDefs = require("../../api/graphql/types");

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();

const startServer = async () => {
    try {
        await server.start();
        server.applyMiddleware({ app });
        app.listen({ port: process.env.PORT || 4000 }, () =>
            console.log(`🚀 Server ready at http://localhost:${process.env.PORT || 4000}${server.graphqlPath}`)
        );
    } catch (error) {
        console.error("Error starting server: ", error);
    }
};

startServer();
