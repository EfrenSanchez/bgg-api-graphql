const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type User {
        id: Int!
        name: String
        firstname: String
        lastname: String
        avatarlink: String
        yearregistered: Int
        lastlogin: String
        stateorprovince: String
        country: String
        webaddress: String
        top: RankList
        hot: RankList
    }

    type RankList {
        domain: String
        items: [RankedGame]
    }

    type RankedGame {
        rank: Int
        type: String
        id: Int
        name: String
    }
`;

module.exports = typeDefs;
