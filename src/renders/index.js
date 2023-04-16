const express = require('express');

const router = express.Router();

const baseData = {
    title: "MyApp",
    nav_h1: "MyApp"
}

router.use((req, res, next) => {
    console.log(`You already access endpoint ${req.baseUrl}`)
    console.log(`payload loaded: \n ${JSON.stringify(baseData)}`);
    next()
  })

router.get('/', (req, res) => {
    
    res.render('index', baseData);
})
    

router.get('/about', (req, res) => {
    baseData['t1'] = "Sobre o Projeto";
    baseData['p1'] = "O projeto é sobre o treinamento em EJS. Uma maneira de modelar o html utilizando o nodejs com express."


    res.render('about', baseData);
})
    

module.exports = router;