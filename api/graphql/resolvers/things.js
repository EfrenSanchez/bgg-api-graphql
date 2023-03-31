const { fetchThings } = require("../../../services/bgg");
const { parseThingData } = require("../../../utils/parsersXmlData");

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

module.exports = {
    fetchAndParseThing,
};
