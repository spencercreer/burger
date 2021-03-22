const express = require('express');
const router = express.Router();
const burger = require('../models/burger.js');

router.get('/', (reg, res) => {
    burger.all((data) => {
        const hbsObject = {
            burger: data,
        };
        console.log(hbsObject);
        res.render('index', hbsObject);
    });
});

router.post('/api/burgers', (req, res) => {
    burger.create(['burger_name', 'devoured'], [req.body.burger_name, req.body.devoured], (result) => {
        res.json({ id: result.insertId });
    });
});

router.put('/api/burgers/:id', (req, res) => {
    const condition = `id = ${req.params.id}`;
    console.log('condition', condition);
    burger.update(
        // {
        //     devoured: true
        // }
    )
})


// Export routes for server.js to use.
module.exports = router;