exports.up = function (knex) {
  return knex.schema.createTable("mon_atk", (wpn) => {
    wpn.increments("id").unique();
    wpn
      .integer("mon_Id")
      .unique()
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("monster")
      .onUpdate("CASCADE")
      .onDelete("CASCADE")
      .wpn.integer("attack_1")
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
  return knex.schema.dropTableIfExists("mon_atk");
};
