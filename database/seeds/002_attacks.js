exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("attack")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("attack").insert([
        {
          id: 1,
          name: "slash",
          damage: 20,
          description: "Thrusts downward diagonally at the opponent",
          atkType: "Melee",
          mp_cost: 0,
        },
        {
          id: 2,
          name: "scratch",
          damage: 5,
          description: "uses their claws to attack opponent",
          atkType: "Melee",
          mp_cost: 0,
        },
        {
          id: 3,
          name: "Divine Pierce",
          damage: 200,
          description:
            "calls upon the gods to bless his weapon before thrusting at the opponent",
          atkType: "Special",
          mp_cost: 1,
        },
        {
          id: 4,
          name: "Conjure Weak Shield",
          damage: -25,
          description:
            "Uses magical prowess to create a weak shield to block for 25 damage",
          atkType: "Magic",
          mp_cost: 5,
        },
        {
          id: 5,
          name: "Do nothing",
          damage: 0,
          description:
            "You mock the opponent in an innapropriate manner that insults his pride",
          atkType: "Other",
          mp_cost: 0,
        },
      ]);
    });
};
