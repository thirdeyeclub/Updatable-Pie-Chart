const router = require('express').Router();
const Pops = require('./pop-model.js');

router.get('/', (req, res) => {
Pops.find()
    .then(pop => {
    res.json(pop);
    })
    .catch(error => res.send(error));
});
module.exports = router;