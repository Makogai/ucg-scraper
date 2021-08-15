var express = require('express');
var router = express.Router();
const fetch = require('node-fetch')
const cheerio = require('cheerio')

router.get('/fakulteti/:fakultet', (request, response) => {
    console.log(request);
    const { fakultet } = request.params
    let url = `https://www.ucg.ac.me/${fakultet}`

    fetch(url)
        .then(response => response.text())
        .then(body => {
            const data = getFakultetPrograms(body)
            response.json({
                data
            });
        })
});


function getFakultetPrograms(body){
    const $ = cheerio.load(body);
    const rows = $("#header-wrap > div > div > nav > ul > li:nth-child(5) .mega-menu-content > div > div > ul > li")
    const results = []
    let i = 0
    rows.each((index,element) =>{
        const result = $(element) 
        id = i;
        const name = result.find('.menu-link').text();
        const link = result.find('.menu-link').attr('href');
        if(link != "#"){
            results.push({
                id,
                name,
                link
            })
            i++
        }
    })
    return results
}

module.exports = {
    getFakultetPrograms: function(body){
        return getFakultetPrograms(body);
    },
    router: router
};
// module.exports = router;
