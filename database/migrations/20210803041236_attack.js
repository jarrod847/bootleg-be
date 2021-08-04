exports.up = function (knex) {
  return knex.schema.createTable("attack", (atk) => {
    atk.increments("id").unique();
    atk.string("name").unique();
    atk.integer("damage");
    atk.string("description");
    atk.enu("atkType", ["Special", "Melee", "Ranged", "Magic"]);
    atk.integer("mp_cost").defaultTo(0);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("attack");
};
