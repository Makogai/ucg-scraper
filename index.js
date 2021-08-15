const exporess = require('express')
const cors = require('cors')
const morgan = require('morgan')
const fetch = require('node-fetch')
const cheerio = require('cheerio')

const app = exporess()

app.use(cors())

app.use(morgan('tiny'))

//ROUTES
app.get('/', (request, response) => {
    response.json({
        message: "Hello there"
    });
});

function getStudies(body){
    const $ = cheerio.load(body);
    const rows = $("#header-wrap > div > div > nav > ul > li:nth-of-type(3) > div > div > div > ul:nth-of-type(1) > .menu-item > ul > li")
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
app.get('/studies', (request, response) => {
    let url = `https://www.ucg.ac.me/index.php`

    fetch(url)
        .then(response => response.text())
        .then(body => {
            const data = getStudies(body)
            response.json({
                data
            });
        })
});


function getFakultete(body){
    console.log("HEREEEEE");
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
app.get('/fakulteti', (request, response) => {
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
        results.push({
            id,
            name,
            link
        })
        i++
    })
    return results
}
app.get('/fakulteti/:fakultet', (request, response) => {
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
app.get('/fakulteti/:fakultet/:ida', (request, response) => {
    const { fakultet, ida } = request.params
    let url = `https://www.ucg.ac.me/${fakultet}`

    fetch(url)
        .then(response => response.text())
        .then(body => {
            const datas = getFakultetPrograms(body)
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

app.use((request, response, next) => {
    const error = new Error('Not found')
    response.status(404)
    next(error)
})

app.use((error, request, response, next) => {
    response.status(response.statusCode || 500)
    response.json({
        message: error.message
    })
})

app.listen(5000, () =>{
    console.log("Listening on port 5000");
})
