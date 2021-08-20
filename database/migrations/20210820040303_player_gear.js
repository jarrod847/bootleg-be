const { WSAEOPNOTSUPP } = require("node:constants");

exports.up = function (knex) {
  return knex.schema.createTable("player_gear", (tbl) => {
    tbl.increments("id").unique();
    tbl
      .integer("head")
      .unsigned()
      .references("id")
      .inTable("gear")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    tbl
      .integer("body")
      .unsigned()
      .references("id")
      .inTable("gear")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    tbl
      .integer("gloves")
      .unsigned()
      .references("id")
      .inTable("gear")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    tbl
      .integer("l_hand")
      .unsigned()
      .references("id")
      .inTable("weapon")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    tbl
      .integer("r_hand")
      .unsigned()
      .references("id")
      .inTable("weapon")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    tbl
      .integer("legs")
      .unsigned()
      .references("id")
      .inTable("gear")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    tbl
      .integer("feet")
      .unsigned()
      .references("id")
      .inTable("gear")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("player_gear");
};
