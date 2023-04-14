const express = require('express');

const router = express.Router();

router.use((req, res, next) => {
    console.log(`You already access endpoint ${req.baseUrl}`)
    next()
  })

router.get('/', (req, res) => {
    const data = {
        title: "MyApp",
        appName: "MyApp"
    }

    res.render('index', data);
})
    

router.get('/about', (req, res) => {
    const data = {
        title: "...",
        text: "...."
    }

    res.render('about', data);
})
    

module.exports = router;