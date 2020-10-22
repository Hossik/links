const axios = require('axios');
require('dotenv').config();

module.exports = async (query, variables) => {
    const {data: {data, errors}} = await axios({
        url: 'https://graphql.fauna.com/graphql',
        method: 'POST',
        headers: {
            Authorization: `Bearer fnAD4yXIo8ACAQJ3s2KDAQVxtODdDdZiAd_ASahV`
        },
        data: {
            query,
            variables, 
        }
    });
    if(errors) {
        console.error(errors);
        throw new Error('sendQuery went wrong')
    }
    return data;
}