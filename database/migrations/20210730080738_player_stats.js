exports.up = function (knex) {
  return knex.schema.createTable("player_stats", (table) => {
    table.increments("id").unique();
    table
      .integer("player_id")
      .unique()
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("player")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table.integer("HP").defaultTo(0);
    table.integer("Lvl").defaultTo(0);
    table.integer("Str").defaultTo(0);
    table.integer("Dex").defaultTo(0);
    table.integer("Int").defaultTo(0);
    table.integer("Location").defaultTo(1);
    table.integer("xp").defaultTo(0);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("player_stats");
};
