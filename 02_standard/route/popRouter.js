const router = require('express').Router();
const Pop = require('./pop-mode.js');

router.get('/pop/', (req, res) => {
Pop.find()
    .then(p => {
    res.status(200).json(p);
    })
    .catch(error => res.send(error));
});
module.exports = router;
