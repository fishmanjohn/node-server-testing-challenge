const db = require('../../dbConfig');

module.exports = {
    find,
    add,
    remove
}

function find(){
    return db('schemes')
};

function add (scheme){
    return db('schemes')
        .insert(scheme, 'id')
        .then(ids => ({ id: ids[0] }))
};

function remove (id) {
    return db('schemes')
    .where('id', Number(id))
    .del();
};