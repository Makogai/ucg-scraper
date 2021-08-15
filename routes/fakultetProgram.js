var express = require('express');
var router = express.Router();
const fetch = require('node-fetch')
const cheerio = require('cheerio')
let asd = require('./fakultet.js')

router.get('/fakulteti/:fakultet/:ida', (request, response) => {
    const { fakultet, ida } = request.params
    let url = `https://www.ucg.ac.me/${fakultet}`

    fetch(url)
        .then(response => response.text())
        .then(body => {
            const datas = asd.getFakultetPrograms(body)
            const res  = datas.find(({id}) => id == ida);
            console.log(res.link);
            fetch(res.link)
                .then(response => response.text())
                .then(body => {
                    const data = getFakultetSubjects(body)
                    response.json({
                        name: res.name,
                        data
                    });
                })
        })
});


function getFakultetSubjects(body){
    const $ = cheerio.load(body);
    const rows = $("#spisak_predmeta > tbody > tr")
    const results = []
    let i = 0
    rows.each((index,element) =>{
        const result = $(element) 
        id = i;
        const name = result.find('td:nth-child(2)').text();
        const year = result.find('td:nth-child(3)').text();
        const ects = result.find('td:nth-child(5)').text();
        results.push({
            id,
            name,
            year,
            ects
        })
        i++
    })
    return results
}

module.exports = router;
