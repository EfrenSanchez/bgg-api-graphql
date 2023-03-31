const { gql } = require("apollo-server-express");
const enumthingType = require("./thingType");

const typeDefs = gql`
    ${enumthingType}

    type Search {
        id: Int!
        type: ThingType!
        name: [Name]
        yearpublished: Int
    }

    type Name {
        type: String!
        sortindex: Int
        value: String!
    }
`;

module.exports = typeDefs;
