exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("location_monsters")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("location_monsters").insert([
        { id: 1, location_id: 1, mon_1_id: 1, mon_2_id: 2, mon_3_id: 3 },
      ]);
    });
};
