'use strict';

const {getPage, parsePage, saveData} = require('./utils')

module.exports.scrape = async(event , context, callback) => {
// fetch yelp page
let  {data , status, isAxiosError: error} = await getPage(event)
let ratingObj = {}
  if(!error){
    ratingObj = await parsePage(data)
    saveData(ratingObj, event)
   }else{
    callback(error, data)
  }
};
