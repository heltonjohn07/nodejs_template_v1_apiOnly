
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('people').del()
    .then(function () {
      // Inserts seed entries
      return knex('people').insert([
        {
          name: 'Helton Andrade',
          email: 'heltonjohn07@hotmail.com',
          whatsapp: '88992022303',
          city: 'Quixeré',
          uf: 'CE'
        }
      ]);
    });
};
