exports.up = function (knex) {
  return knex.schema.createTable("player", (user) => {
    user.increments("id").unique();
    user.string("playerName", 16).notNullable().unique();
    user.string("password", 255).notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("player");
};
