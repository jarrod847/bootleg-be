exports.up = function (knex) {
  return knex.schema.createTable("location", (loc) => {
    loc.increments("id").unique();
    loc.string("name", 16).notNullable().unique();
    loc.integer("locationLvl").defaultTo(0);
    loc.string("Description").defaultTo("No Information");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("location");
};
