const axios = require("axios");
const { parseStringPromise } = require("xml2js");

const parseXMLList = async (xml) => {
    try {
        const result = await parseStringPromise(xml);
        return result.items.item;
    } catch (err) {
        console.error(`Error parsing XML: ${err.message}`);
        throw new Error("Error parsing XML");
    }
};

const parseXMLItem = async (xml) => {
    try {
        const result = await parseStringPromise(xml);
        return result;
    } catch (err) {
        console.error(`Error parsing XML: ${err.message}`);
        throw new Error("Error parsing XML");
    }
};

const fetchThings = async (args) => {
    const endpoint = "https://api.geekdo.com/xmlapi2/thing";
    const queryParams = new URLSearchParams(args);
    console.log(`${endpoint}?${queryParams.toString()}`);
    try {
        const { data } = await axios.get(`${endpoint}?${queryParams.toString()}`);
        return await parseXMLList(data);
    } catch (err) {
        console.error(`Error fetching things: ${err.message}`);
        throw new Error("Error fetching things");
    }
};

const searchThings = async (args) => {
    const endpoint = "https://api.geekdo.com/xmlapi2/search";
    const queryParams = new URLSearchParams(args);

    try {
        const { data } = await axios.get(`${endpoint}?${queryParams.toString()}`);
        return await parseXMLList(data);
    } catch (err) {
        console.error(`Error fetching search: ${err.message}`);
        throw new Error("Error fetching search");
    }
};

const getUser = async (args) => {
    const endpoint = "https://api.geekdo.com/xmlapi2/user";
    const queryParams = new URLSearchParams(args);
    console.log(`${endpoint}?${queryParams.toString()}`);

    try {
        const { data } = await axios.get(`${endpoint}?${queryParams.toString()}`);
        return await parseXMLItem(data);
    } catch (err) {
        console.error(`Error fetching user: ${err.message}`);
        throw new Error("Error fetching user");
    }
};

module.exports = {
    fetchThings,
    searchThings,
    getUser,
};
