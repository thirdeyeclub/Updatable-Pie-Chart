const db = require('../database/config00.js');

module.exports = {
  add,
  find,
  findBy,
  findById
};

function find() {
  return db('pop').select( 'country', 'population');
}

function findBy(filter) {
  return db('pop').where(filter);
}

async function add(user) {
  const [id] = await db('pop').insert(user);

  return findById(id);
}

function findById(id) {
  return db('pop')
    .where({ id })
    .first();
}