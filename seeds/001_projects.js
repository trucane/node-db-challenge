
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {
          name:'Drywall',
          description:'Drywall Livingroom',
          completed:0
        },

        {
          name:'Landscaping',
          description:'Sod front lawn',
          completed:0
        },
      ]);
    });
};
