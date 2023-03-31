const { fetchAndParseThing } = require("./things");
const { searchAndParseThings } = require("./search");
const { getAndParseUser } = require("./user");

module.exports = {
    Query: {
        thing: (_, args) => fetchAndParseThing(args),
        search: (_, args) => searchAndParseThings(args),
        user: (_, args) => getAndParseUser(args),
    },
};
