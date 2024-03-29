exports.up = function (knex) {
  return knex.schema.createTable("location_monsters", (tbl) => {
    tbl.increments("id").unique();
    tbl
      .integer("location_id")
      .unique()
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("location")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    tbl
      .integer("mon_1_id")
      .unsigned()
      .references("id")
      .inTable("monster")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    tbl
      .integer("mon_2_id")
      .unsigned()
      .references("id")
      .inTable("monster")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    tbl
      .integer("mon_3_id")
      .unsigned()
      .references("id")
      .inTable("monster")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    tbl
      .integer("mon_4_id")
      .unsigned()
      .references("id")
      .inTable("monster")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    tbl
      .integer("mon_5_id")
      .unsigned()
      .references("id")
      .inTable("monster")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    tbl
      .integer("mon_6_id")
      .unsigned()
      .references("id")
      .inTable("monster")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    tbl
      .integer("mon_7_id")
      .unsigned()
      .references("id")
      .inTable("monster")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    tbl
      .integer("mon_8_id")
      .unsigned()
      .references("id")
      .inTable("monster")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("location_monsters");
};
