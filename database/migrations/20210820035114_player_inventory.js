exports.up = function (knex) {
  return knex.schema.createTable("player_inventory", (tbl) => {
    tbl.increments("id").unique();
    tbl
      .integer("player_id")
      .unique()
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("player")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    tbl.integer("gold").defaultTo(0);
    tbl.string("slot_1");
    tbl.string("slot_2");
    tbl.string("slot_3");
    tbl.string("slot_4");
    tbl.string("slot_5");
    tbl.string("slot_6");
    tbl.string("slot_7");
    tbl.string("slot_8");
    tbl.string("slot_9");
    tbl.string("slot_10");
    tbl.string("slot_11");
    tbl.string("slot_12");
    tbl.string("slot_13");
    tbl.string("slot_14");
    tbl.string("slot_15");
    tbl.string("slot_16");
    tbl.string("slot_17");
    tbl.string("slot_18");
    tbl.string("slot_19");
    tbl.string("slot_20");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("player_inventory");
};
