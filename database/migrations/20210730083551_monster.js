exports.up = function (knex) {
  return knex.schema.createTable("monster", (mon) => {
    mon.increments("").unique();
    mon.string("name").NotNullable().unique();
    mon.integer("Lvl");
    mon.integer("HP");
    mon.integer("Str");
    mon.integer("Dex");
    mon.integer("MP");
    mon.integer("Location");
    mon.integer("yExp");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("monster");
};
