exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("monster")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("monster").insert([
        {
          id: 1,
          name: "Wolf",
          Lvl: 1,
          Hp: 20,
          total_hp: 20,
          Str: 1,
          Def: 1,
          Mp: 10,
          max_mp: 10,
          Loc: 1,
          yExp: 200,
        },
        {
          id: 2,
          name: "Goblin",
          Lvl: 2,
          Hp: 35,
          total_hp: 35,
          Str: 1,
          Def: 2,
          Mp: 20,
          max_mp: 20,
          Loc: 1,
          yExp: 350,
        },
        {
          id: 3,
          name: "Hobgoblin",
          Lvl: 3,
          Hp: 50,
          total_hp: 50,
          Str: 1,
          Def: 3,
          Mp: 30,
          max_mp: 30,
          Loc: 1,
          yExp: 600,
        },
      ]);
    });
};
