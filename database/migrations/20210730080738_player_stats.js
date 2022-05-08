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
    table.integer("Hp").defaultTo(100);
    table.integer("total_hp").defaultTo(100);
    table.integer("Mp").defaultTo(0);
    table.integer("Vig").defaultTo(0);
    table.integer("Lvl").defaultTo(1);
    table.integer("Str").defaultTo(0);
    table.integer("Dex").defaultTo(0);
    table.integer("Int").defaultTo(0);
    table.integer("Shield").default(0);
    table.integer("Location").defaultTo(0);
    table.integer("Xp").defaultTo(0);
    table.integer("stat_points").defaultTo(0);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("player_stats");
};
