#!/usr/bin/env node
const { getCode,} = require('country-list');
const axios = require('axios').default;



function PublicHolidays(country, year){
    countryCode = getCode(country);
    async function getHolidates() {
    try {
      const response = await axios.get(`https://date.nager.at/api/v3/PublicHolidays/${year}/${countryCode}`);
      response.data.forEach(holyday => {
        console.log(`${holyday.date}: ${holyday.name} or "${holyday.localName}" in local language`)
    });
    } 
    catch (error) {
      console.error(error);
    }
  }

  getHolidates()
}


const data = process.argv.slice(2)

PublicHolidays(data[0], data[1])