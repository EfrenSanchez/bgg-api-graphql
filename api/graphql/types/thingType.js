const { gql } = require("apollo-server-express");

const typeDefs = gql`
    enum ThingType {
        boardgame
        boardgameexpansion
    }
`;

module.exports = typeDefs;
