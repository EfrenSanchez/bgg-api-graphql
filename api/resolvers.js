const { fetchThings, searchThings } = require("../services/bgg");
const { parseSearchData, parseThingData } = require("../utils/parsersXmlData");

const resolvers = {
    Query: {
        thing: async (_, args) => {
            try {
                const things = await fetchThings(args);
                if (!things) return {};

                return parseThingData(things[0]);
            } catch (error) {
                console.error(error);
                throw new Error("Something went wrong while fetching thing data.");
            }
        },
        search: async (_, args) => {
            try {
                const search = await searchThings(args);
                if (!search) return [];

                return search.map(parseSearchData);
            } catch (error) {
                console.error(error);
                throw new Error("Something went wrong while searhing.");
            }
        },
    },
};

module.exports = resolvers;
