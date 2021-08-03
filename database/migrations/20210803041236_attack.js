exports.up = function (knex) {
  return knex.schema.createTable("attack", (atk) => {
    atk.increments("id").unique();
    atk.string("name").unique();
    atk.integer("damage");
    atk.string("description");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("attack");
};
