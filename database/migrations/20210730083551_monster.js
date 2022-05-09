exports.up = function (knex) {
  return knex.schema.createTable("monster", (mon) => {
    mon.increments("id").unique();
    mon.string("name").unique();
    mon.integer("total_hp");
    mon.integer("Lvl");
    mon.integer("Hp");
    mon.integer("Str");
    mon.integer("Def");
    mon.integer("Mp");
    mon.integer("max_mp");
    mon.integer("Shield").default(0);
    mon.integer("Loc");
    mon.integer("yExp");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("monster");
};
