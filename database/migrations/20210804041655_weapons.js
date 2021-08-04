exports.up = function (knex) {
  return knex.schema.createTable("weapon", (wpn) => {
    wpn.increments("id").unique();
    wpn.integer("Wpn_lvl").defaultTo(0);
    wpn.integer("Str").defaultTo(0);
    wpn.integer("Dex").defaultTo(0);
    wpn.integer("Int").defaultTo(0);
    wpn
      .integer("attack_1")
      .unsigned()
      .references("id")
      .inTable("attack")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    wpn
      .integer("attack_2")
      .unsigned()
      .references("id")
      .inTable("attack")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    wpn
      .integer("attack_3")
      .unsigned()
      .references("id")
      .inTable("attack")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    wpn
      .integer("attack_4")
      .unsigned()
      .references("id")
      .inTable("attack")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("weapon");
};
