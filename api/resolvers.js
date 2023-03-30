const { fetchThings, searchThings, getUser } = require("../services/bgg");
const { parseSearchData, parseThingData, parseUserData } = require("../utils/parsersXmlData");

const fetchAndParseThing = async (args) => {
    try {
        const things = await fetchThings({ ...args, stats: args.stats ? 1 : 0 });

        if (!things) return [];
        return things.map(parseThingData);
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

const getAndParseUser = async (args) => {
    try {
        const user = await getUser({
            ...args,
            hot: args.hot ? 1 : 0,
            top: args.top ? 1 : 0,
        });

        if (!user) return {};
        return parseUserData(user);
    } catch (error) {
        console.error(error);
        throw new Error("Something went wrong fetching user data.");
    }
};
module.exports = {
    Query: {
        thing: (_, args) => fetchAndParseThing(args),
        search: (_, args) => searchAndParseThings(args),
        user: (_, args) => getAndParseUser(args),
    },
};
