exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("weapon")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("weapon").insert([
        {
          id: 1,
          name: "Blessed Sword",
          Wpn_lvl: 0,
          Str: 50,
          Dex: 50,
          Int: 100,
          attack_1: 1,
          attack_2: 3,
          attack_3: 2,
          attack_4: 5,
        },
      ]);
    });
};
