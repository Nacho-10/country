const { Router } = require('express');
const axios = require('axios');
const Country = require('../models/Country');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

let config = {
    method : 'get',
    maxBodyLength : Infinity,
    url : 'https://restcountries.com/v3/all',
    headers : {},
};
router.get('/guardar-paises', async (req,res) => {
    axios
        .request(config)
        .then((response) => {
            response.data.map(async (country) => {
                if (country.capital) {
                    const countryToSave = {
                        id: country.cca3,
                        name: country.name.common,
                        flag: country.flags[1],
                        continent: country.region,
                        capital: country.capital[0],
                        subregion: country.subregion,
                        area: country.area,
                        population: country.population,
                    };
                    console.log(countryToSave);
                    await Country.create({
                        ...countryToSave,    //aca hay una línea que quiero reveer
                    });
                };
            });
            res.send('data');
        })
        .catch ((error) => {
            console.log(error)
        });

        
});

module.exports = router;
