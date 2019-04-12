exports.seed = function(knex) {
  return knex('pop').insert([
    { id: 1 , country: 'China' , population:1389618778 },
    { id: 2 , country: 'India' , population: 1311559204},
    { id: 3 , country: 'US' , population: 331883986 },
    { id: 4 , country: 'Indonesia' , population: 264935824 },
    { id: 5 , country: 'Pakistan' , population: 210797836 },
    { id: 6 , country: 'Brazil' , population:210301591 },
  ]);
};

// const data01 = [
//   { name: 'China', value: 1389618778 }, 
//   { name: 'India', value: 1311559204 },
//   { name: 'US', value: 331883986	 }, 
//   { name: 'Indonesia', value: 264935824 },
//   { name: 'Pakistan', value: 210797836 },
//   { name: 'Brazil', value: 	210301591 }]