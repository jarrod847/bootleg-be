exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("player_gear")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("player_gear").insert([{ id: 1, player_id: 1, r_hand: 1 }]);
    });
};
