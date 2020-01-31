
exports.up = function(knex) {
    return knex.schema
    .createTable('schemes', tbl => {
      tbl.increments();
      tbl.text('scheme_name', 128)
        .unique()
        .notNullable()
      tbl.text('description', 150)
        .notNullable()
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('schemes')
};
