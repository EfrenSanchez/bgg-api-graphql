const { fetchThings, searchThings } = require("../services/bgg");
const { parseSearchData, parseThingData } = require("../utils/parsersXmlData");

const fetchAndParseThing = async (args) => {
    try {
        const things = await fetchThings(args);
        if (!things) return {};

        return parseThingData(things[0]);
    } catch (error) {
        console.error(error);
        throw new Error("Something went wrong while fetching thing data.");
    }
};

const searchAndParseThings = async (args) => {
    try {
        const search = await searchThings(args);
        if (!search) return [];

        return search.map(parseSearchData);
    } catch (error) {
        console.error(error);
        throw new Error("Something went wrong while searching.");
    }
};

module.exports = {
    Query: {
        thing: (_, args) => fetchAndParseThing(args),
        search: (_, args) => searchAndParseThings(args),
    },
};
