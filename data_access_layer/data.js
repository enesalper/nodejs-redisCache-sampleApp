const fetch = require("node-fetch");

const dataSourceUrl = 'http://www.omdbapi.com?apikey=9c36b4fd&i=';


async function getData(movieId){
    try {
        const response = await fetch(dataSourceUrl+movieId);
        const data = await response.json();
        return data;
    } catch (err) {
        console.log(err);
        return null;
    }
}

module.exports.getData = getData;