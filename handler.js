'use strict';

const {getPage, parsePage, saveData} = require('./utils')

module.exports.scrape = async(event , context, callback) => {
// fetch yelp page
let  {data , status, isAxiosError: error} = await getPage(event)
let ratingObj = {}
  if(!error){
    ratingObj = await parsePage(data)
    await saveData(ratingObj, event)
    callback(null, {
      statusCode: 200,
      body: JSON.stringify({
        message: `Scraped ${event}`
      })
    })
   }else{
    callback(new Error(`Error scraping ${event}: ${JSON.stringify(error)}`))
  }
};
