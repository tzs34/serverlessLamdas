'use strict';

const {getPage, parsePage, saveData} = require('./utils')

module.exports.scrape = async(event , context, callback) => {
// fetch yelp page
let  {data , status, isAxiosError} = await getPage(event)
console.log(data)
console.log(status)

//parse page

// save ratings data to db

};
