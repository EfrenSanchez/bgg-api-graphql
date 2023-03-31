const { gql } = require("apollo-server-express");
const thingsTypeDefs = require("./things");
const searchTypeDefs = require("./search");
const userTypeDefs = require("./user");

const typeDefs = gql`
    ${thingsTypeDefs}
    ${searchTypeDefs}
    ${userTypeDefs}

    type Query {
        thing(id: String, type: ThingType, stats: Boolean): [Thing]
        search(query: String, type: ThingType): [Search]
        user(name: String, hot: Boolean, top: Boolean): User
    }
`;

module.exports = typeDefs;
