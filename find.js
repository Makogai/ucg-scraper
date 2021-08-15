const data = [
  {
    id: 0,
    name: " Osnovne studije ",
    link: "#",
  },
  {
    id: 1,
    name: "ENERGETIKA I AUTOMATIKA (2017)",
    link: "https://www.ucg.ac.me/studprog/2/1/1/2020-energetika-i-automatika-2017",
  },
  {
    id: 2,
    name: "ELEKTRONIKA, TELEKOMUNIKACIJE I RAČUNARI (2017)",
    link: "https://www.ucg.ac.me/studprog/2/2/1/2020-elektronika-telekomunikacije-i-racunari-2017",
  },
  {
    id: 3,
    name: "STUDIJE PRIMIJENJENOG RAČUNARSTVA (2017)",
    link: "https://www.ucg.ac.me/studprog/2/3/1/2020-studije-primijenjenog-racunarstva-2017",
  },
  {
    id: 4,
    name: " Specijalističke studije ",
    link: "#",
  },
  {
    id: 5,
    name: "ENERGETIKA I AUTOMATIKA (2012)",
    link: "https://www.ucg.ac.me/studprog/2/1/2/2020-energetika-i-automatika-2012",
  },
  {
    id: 6,
    name: "ELEKTRONIKA, TELEKOMUNIKACIJE I RAČUNARI (2012)",
    link: "https://www.ucg.ac.me/studprog/2/2/2/2020-elektronika-telekomunikacije-i-racunari-2012",
  },
  {
    id: 7,
    name: "STUDIJE PRIMIJENJENOG RAČUNARSTVA (2012)",
    link: "https://www.ucg.ac.me/studprog/2/3/2/2020-studije-primijenjenog-racunarstva-2012",
  },
  {
    id: 8,
    name: " Magistarske studije ",
    link: "#",
  },
  {
    id: 9,
    name: "ENERGETIKA I AUTOMATIKA (2012)",
    link: "https://www.ucg.ac.me/studprog/2/1/3/2020-energetika-i-automatika-2012",
  },
  {
    id: 10,
    name: "ELEKTRONIKA, TELEKOMUNIKACIJE I RAČUNARI (2012)",
    link: "https://www.ucg.ac.me/studprog/2/2/3/2020-elektronika-telekomunikacije-i-racunari-2012",
  },
  {
    id: 11,
    name: "STUDIJE PRIMIJENJENOG RAČUNARSTVA (2008)",
    link: "https://www.ucg.ac.me/studprog/2/3/3/2020-studije-primijenjenog-racunarstva-2008",
  },
  {
    id: 12,
    name: " Doktorske studije ",
    link: "#",
  },
  {
    id: 13,
    name: "ELEKTROTEHNIKA (2012)",
    link: "https://www.ucg.ac.me/studprog/2/5/1/2020-elektrotehnika-2012",
  },
  {
    id: 14,
    name: " Master studije ",
    link: "#",
  },
  {
    id: 15,
    name: "ELEKTROENERGETSKI SISTEMI (2020)",
    link: "https://www.ucg.ac.me/studprog/2/1/4/2020-elektroenergetski-sistemi-2020",
  },
  {
    id: 16,
    name: "AUTOMATIKA i INDUSTRIJSKA ELEKTROTEHNIKA (2020)",
    link: "https://www.ucg.ac.me/studprog/2/1/5/2020-automatika-i-industrijska-elektrotehnika-2020",
  },
  {
    id: 17,
    name: "ELEKTRONIKA (2020)",
    link: "https://www.ucg.ac.me/studprog/2/2/4/2020-elektronika-2020",
  },
  {
    id: 18,
    name: "TELEKOMUNIKACIJE (2020)",
    link: "https://www.ucg.ac.me/studprog/2/2/5/2020-telekomunikacije-2020",
  },
  {
    id: 19,
    name: "RAČUNARI (2020)",
    link: "https://www.ucg.ac.me/studprog/2/2/6/2020-racunari-2020",
  },
  {
    id: 20,
    name: "PRIMIJENJENO RAČUNARSTVO (2020)",
    link: "https://www.ucg.ac.me/studprog/2/3/4/2020-primijenjeno-racunarstvo-2020",
  },
];
function isId(program, id) {
    return program.id === id;
  }
  
const res  = data.find(({id}) => id === 2);
console.log(res);
  // { name: 'cherries', quantity: 5 }