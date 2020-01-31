

exports.seed = function(knex) {
  return knex('schemes').insert([
    {scheme_name: 'World Domination',
      description:"How to loose friends and influence everyone"
  },
    {scheme_name: 'Get Rich Quick',
    description:"Make lots of money by trodding on the backs of others"},
    {scheme_name: 'Revenge',
    description:"Sweet sweet revenge a dish best served cold, pairs nicely with keanti"},
    {scheme_name: 'More Instagram Followers',
    description:"Be an influencer get paid for your clout"},
    {scheme_name: 'Find the Holy Grail',
    description:"Find jesuss sippy cup and live forever"},
    { scheme_name: 'Steal Coworker\'s Identity',
    description:"Ruin karen from accountings credit score"}
  ]);
};
