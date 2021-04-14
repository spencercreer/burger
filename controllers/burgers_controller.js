const express = require('express');
const router = express.Router();
const burger = require('../models/burger.js');

// routes
router.get('/', (req, res) => {
    burger.all((data) => {
        const hbsObject = {
            burgers: data,
        };
        console.log(hbsObject);
        res.render('index', hbsObject);
    });
});

router.post('/api/burgers', (req, res) => {
    burger.create("burger_name", req.body.burger_name, function(result) {
  //  burger.create(['burger_name', 'devoured'], [req.body.burger_name, req.body.devoured], (result) => {
        res.json({ id: result.insertId });
        res.status(200).end();
    });
});

router.put('/api/burgers/:id', (req, res) => {
    burger.update('devoured', true, 'id', req.params.id, (result) => {
        if (result.changedRows === 0) {
          // If no rows were changed, then the ID must not exist, so 404
          return res.status(404).end();
        }
        res.status(200).end();
      })
})


// Export routes for server.js to use.
module.exports = router;