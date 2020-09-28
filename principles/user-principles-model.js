const db = require("../database/dbConfig");

module.exports = {
  add,
  find,
  findBy,
  update,
  remove
};

function find(id) {
  return db("principles")
    .select('principles.id','principles.user_id', 'principles.problem', 'principles.diagnosis', 'principles.change')
    .where({user_id: id})
    
}

function findBy(filter) {
  return db("principles").where(filter).first();
}

async function add(principle) {
    return db("principles")
    .insert(principle, "id")
    .then(([id]) => {
        return findBy(id);
    });
}

function update(id, changes) {
    return db('principles')
      .where({ id })
      .update(changes, '*');
  }

function remove(id) { 
    return db('principles')
    .where('id', Number(id))
    .del();
}

