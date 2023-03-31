const { gql } = require("apollo-server-express");
const enumThingType = require("./thingType");

const typeDefs = gql`
    ${enumThingType}

    type Thing {
        id: Int!
        type: ThingType!
        thumbnail: String
        image: String
        description: String
        name: [Name]
        yearpublished: Int
        numplayers: Numplayers
        playtime: Playtime
        statistics: Statics
        categories: [Link]
        mechanics: [Link]
        expansions: [Link]
        designers: [Link]
        publishers: [Link]
        families: [Link]
        artists: [Link]
    }

    type Name {
        type: String!
        sortindex: Int
        value: String!
    }

    type Numplayers {
        minplayers: Int
        maxplayers: Int
    }

    type Playtime {
        minplaytime: Int
        maxplaytime: Int
    }

    type Statics {
        usersrated: Int
        average: Float
        averageweight: Float
        ranks: [Rank]
    }

    type Rank {
        type: String
        id: Int
        name: String
        friendlyname: String
        value: Int
    }

    type Link {
        id: String
        type: String
        value: String
    }
`;

module.exports = typeDefs;
