Meteor.methods(
{
  'show'(object)
  {
    console.log(object);

  },

  'insert_company': function(company)
  {
  	var cmp = Company.insert(company);
  	return cmp;    
  }

  

});
