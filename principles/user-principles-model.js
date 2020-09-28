const db = require("../database/dbConfig");

module.exports = {
  add,
  find,
  update,
  remove
};

function find(id) {
  return db("principles")
    .select('principles.id','principles.user_id', 'principles.problem', 'principles.diagnosis', 'principles.change')
    .where({user_id: id})
    
}

async function add(principle) {
    return db("principles")
    .insert(principle, "id")
    .then(([id]) => {
        return findById(id);
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

