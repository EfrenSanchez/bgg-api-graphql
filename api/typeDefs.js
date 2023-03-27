const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type Thing {
        id: String!
        type: ThingType!
        thumbnail: String
        image: String
        description: String
        name: [Name]
        yearpublished: Int
        minplayers: Int
        maxplayers: Int
        categories: [Link]
        mechanics: [Link]
        expansions: [Link]
        designers: [Link]
        publishers: [Link]
        families: [Link]
        artists: [Link]
    }

    type Search {
        id: String!
        type: ThingType!
        name: [Name]
        yearpublished: Int
    }

    type Name {
        type: String!
        sortindex: Int
        value: String!
    }

    type Link {
        id: String
        type: String
        value: String
    }

    enum ThingType {
        boardgame
        boardgameexpansion
    }

    type Query {
        thing(id: String, type: ThingType): Thing
        search(query: String, type: ThingType): [Search]
    }
`;

module.exports = typeDefs;
