
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('actions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {
          project_id:1,
          description:'measure room',
          notes:'I need a ladder',
          completed:0
        },

        {
          project_id:1,
          description:'purchase measuring tape needs to be longer mine is too short',
          notes:'need constant measurement and slowing down because of short tape',
          completed:0
        },

        {
          project_id:2,
          description:'purchase sod',
          notes:'Home depot have a sale this weekend',
          completed:0
        },

        {
          project_id:2,
          description:'purchase ketucky blue grass sod',
          notes:'words better with shaded areas',
          completed:0
        },
      ]);
    });
};
