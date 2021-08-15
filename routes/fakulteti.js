var express = require('express');
var router = express.Router();
const fetch = require('node-fetch')
const cheerio = require('cheerio')

router.get('/fakulteti', (request, response) => {
  let url = `https://www.ucg.ac.me/index.php`

  fetch(url)
      .then(response => response.text())
      .then(body => {
          const data = getFakultete(body)
          response.json({
              data
          });
      })
});

function getFakultete(body){
  const $ = cheerio.load(body);
  const rows = $("#header-wrap > div > div > nav > ul > li:nth-child(2) > .mega-menu-content > div > div > ul > li")
  const results = []

  rows.each((index,element) =>{
      const result = $(element) 
      const text = result.find('.menu-link').text();
      const link = "https://ucg.ac.me" + result.find('.menu-link').attr('href');
      results.push({
          text,
          link
      })
  })
  return results
}

module.exports = router;
