/*
Készítsd el az előző feladat azon változatát ahol megadjuk az óraszámot is.
Csak az adott órára vonatkozó hőmérséklettel térjen vissza a függvény.
*/

const locations = require('../locations.json');
const APIAdress = 'https://archive-api.open-meteo.com/v1/archive?';

const f2 = async (lat, longitude, date, hour) => {
    const str = `${APIAdress}latitude=${lat}&longitude=${longitude}&start_date=${date}&end_date=${date}&hourly=temperature_2m`;
    const response = await fetch(str);
    const data = await response.json();
    
    return data.hourly.temperature_2m[hour];
};

module.exports = f2;
