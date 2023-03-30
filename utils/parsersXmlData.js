const LinkTypeNames = {
    category: "category",
    mechanic: "mechanic",
    expansion: "expansion",
    designer: "designer",
    publisher: "publisher",
    family: "family",
    artist: "artist",
};

const getFirstNumberValue = (list) => list?.map((item) => Number(item["$"]?.value))?.[0] || 0;
const getFirstStringValue = (list) => list?.map((item) => item["$"]?.value)?.[0] || "";
const extractStringValuesFromArray = (list) => list?.map((obj) => obj["$"]);

const parseThingData = (data) => {
    const {
        name = [],
        yearpublished = [],
        minplayers = [],
        maxplayers = [],
        link = [],
        description = [""],
        thumbnail = [""],
        image = [""],
        minplaytime = [],
        maxplaytime = [],
        statistics = [],
    } = data;

    const ratings = statistics?.map(({ ratings }) => ratings?.[0] || {})?.[0] || {};
    const links = link?.map((link) => link["$"]);

    return {
        id: data["$"]?.id,
        type: data["$"]?.type,
        description: description?.[0] || 0,
        thumbnail: thumbnail?.[0] || 0,
        image: image?.[0] || 0,
        name: extractStringValuesFromArray(name),
        yearpublished: getFirstNumberValue(yearpublished),
        numplayers: {
            minplayers: getFirstNumberValue(minplayers),
            maxplayers: getFirstNumberValue(maxplayers),
        },
        playtime: {
            minplaytime: getFirstNumberValue(minplaytime),
            maxplaytime: getFirstNumberValue(maxplaytime),
        },
        categories: links?.filter(({ type }) => type?.includes(LinkTypeNames.category)),
        mechanics: links?.filter(({ type }) => type?.includes(LinkTypeNames.mechanic)),
        expansions: links?.filter(({ type }) => type?.includes(LinkTypeNames.expansion)),
        designers: links?.filter(({ type }) => type?.includes(LinkTypeNames.designer)),
        publishers: links?.filter(({ type }) => type?.includes(LinkTypeNames.publisher)),
        families: links?.filter(({ type }) => type?.includes(LinkTypeNames.family)),
        artists: links?.filter(({ type }) => type?.includes(LinkTypeNames.artist)),
        statistics: {
            usersrated: getFirstNumberValue(ratings?.usersrated || []),
            average: getFirstNumberValue(ratings?.average || []),
            averageweight: getFirstNumberValue(ratings?.averageweight || []),
            ranks: extractStringValuesFromArray(ratings?.ranks?.[0]?.rank),
        },
    };
};

const parseSearchData = (data) => {
    const { name = [], yearpublished = [] } = data;

    return {
        id: data["$"]?.id,
        type: data["$"]?.type,
        name: extractStringValuesFromArray(name),
        yearpublished: getFirstNumberValue(yearpublished),
    };
};

const parseUserData = (data) => {
    const { user } = data;

    return {
        id: user["$"].id,
        name: user["$"].name,
        firstname: getFirstStringValue(user.firstname),
        lastname: getFirstStringValue(user.lastname),
        avatarlink: getFirstStringValue(user.avatarlink),
        yearregistered: getFirstStringValue(user.yearregistered),
        lastlogin: getFirstStringValue(user.lastlogin),
        stateorprovince: getFirstStringValue(user.stateorprovince),
        country: getFirstStringValue(user.country),
        webaddress: getFirstStringValue(user.webaddress),
        top: {
            domain: user.top[0]["$"].domain,
            items: extractStringValuesFromArray(user?.top?.[0]?.item),
        },
        hot: {
            domain: user.top[0]["$"].domain,
            items: extractStringValuesFromArray(user?.hot?.[0]?.item),
        },
    };
};

module.exports = {
    parseThingData,
    parseSearchData,
    parseUserData,
};
