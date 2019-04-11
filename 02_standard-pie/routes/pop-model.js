const db = require('../database/config00');

module.exports = {
add,
find,
findBy,
findById
};

function find() {
return db('population by country').select('id', 'username', 'password');
}

function findBy(filter) {
    return db('population by country').where(filter);
}

async function add(pop) {
const [id] = await db('population by country').insert(pop);

return findById(id);
}

function findById(id) {
return db('population by country')
    .where({ id })
    .first();
}