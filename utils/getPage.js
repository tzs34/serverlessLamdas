const axios = require('axios')

const getData = (url) => {
    return axios.get(url);
}

module.exports = async (businessName) => {
    const url = `https://www.yelp.com/biz/${businessName}`;
    try {
        return await getData(url)
        } catch(error) {
            console.error(`Error getting data: ${JSON.stringify(error)}`);
         return error
       }
}