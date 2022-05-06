exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("location")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("location").insert([
        {
          id: 1,
          name: "Cave",
          locationLvl: 1,
          Description:
            "Dark and Damp chrevis amongst a mountain peek! A Light in the distance outlines the possibility for more",
        },
      ]);
    });
};
