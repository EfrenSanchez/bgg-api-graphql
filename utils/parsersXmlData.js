const parseThingData = (data) => {
    const { name = [], yearpublished = [], minplayers = [], maxplayers = [], link = [], description = [""], thumbnail = [""], image = [""] } = data;

    const links = link.map((link) => link["$"]);
    return {
        id: data["$"].id,
        type: data["$"].type,
        description: description[0] || 0,
        thumbnail: thumbnail[0] || 0,
        image: image[0] || 0,
        name: name.map((nameObj) => nameObj["$"]),
        yearpublished: yearpublished.map((yearObj) => Number(yearObj["$"].value))[0] || 0,
        minplayers: minplayers.map((minplayerObj) => Number(minplayerObj["$"].value))[0] || 0,
        maxplayers: maxplayers.map((maxplayerObj) => Number(maxplayerObj["$"].value))[0] || 0,
        categories: links.filter(({ type }) => type.includes("category")),
        mechanics: links.filter(({ type }) => type.includes("memechanic")),
        expansions: links.filter(({ type }) => type.includes("expansion")),
        designers: links.filter(({ type }) => type.includes("designer")),
        publishers: links.filter(({ type }) => type.includes("publisher")),
        families: links.filter(({ type }) => type.includes("family")),
        artists: links.filter(({ type }) => type.includes("artist")),
    };
};
const parseSearchData = (data) => {
    const { name = [], yearpublished = [] } = data;

    return {
        id: data["$"].id,
        type: data["$"].type,
        name: name.map((nameObj) => nameObj["$"]),
        yearpublished: yearpublished.map((yearObj) => Number(yearObj["$"].value))[0] || 0,
    };
};

module.exports = {
    parseThingData,
    parseSearchData,
};
