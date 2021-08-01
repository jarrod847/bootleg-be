exports.up = function (knex) {
  return knex.schema.createTable("monster", (mon) => {
    mon.increments("id").unique();
    mon.string("name").unique();
    mon.integer("Lvl");
    mon.integer("HP");
    mon.integer("Str");
    mon.integer("Def");
    mon.integer("MP");
    mon.integer("Location");
    mon.integer("yExp");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("monster");
};
