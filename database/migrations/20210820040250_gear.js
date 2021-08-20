exports.up = function (knex) {
  return knex.schema.createTable("gear", (tbl) => {
    tbl.increments("id").unique();
    tbl.integer("gear_lvl").defaultTo(0);
    tbl.integer("Vig").defaultTo(0);
    tbl.integer("Str").defaultTo(0);
    tbl.integer("Dex").defaultTo(0);
    tbl.integer("Int").defaultTo(0);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("gear");
};
