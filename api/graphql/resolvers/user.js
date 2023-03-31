const { getUser } = require("../../../services/bgg");
const { parseUserData } = require("../../../utils/parsersXmlData");

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
    getAndParseUser,
};
