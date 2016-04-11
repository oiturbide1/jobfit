Meteor.methods(
{
  'show'(object)
  {
    console.log(object);

  },

  'insert_company'(company)
  {
  	var cmp = Company.insert(company);
  	return cmp;    
  },

  'get_last_insertion'(db,id)
  {
  	var last = db.findOne({_id: id})
  	return last;
  }
});
