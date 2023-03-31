const { searchThings } = require("../../../services/bgg");
const { parseSearchData } = require("../../../utils/parsersXmlData");

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
    searchAndParseThings,
};
