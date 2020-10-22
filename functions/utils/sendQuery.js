const axios = require('axios');
require('dotenv').config();

module.exports = async (query, variables) => {
    const {
        data: { data, errors },
    } = await axios({
        url: 'https://graphql.fauna.com/graphql',
        method: 'POST',
        headers: {
            Authorization: `Bearer fnAD4YLwRdACARSTvBfEbd3UOO4LOyxSI-FsCnFU`,
        },
        data: {
            query,
            variables,
        },
    });
    if (errors) {
        console.error(errors);
        throw new Error('Something went wrong');
    }
    return data;
};