
/*PersonalInfo.after.insert(function(userId,doc)
{
	console.log('inserted:', this._id);

});*/


var piHooks = {
  after: {
    insert: function(error,result) 
    {
      if (error){
      	console.log(error);
      }
      else{
      	console.log("this: " + this._id);
      	console.log(result, {_id: result});
      	console.log('inserted');
      }
    }
  }
}

//AutoForm.addHooks('personalInfoForm', piHooks);

/*AutoForm.hooks({
	'personalInfoForm': piHooks
});*/

AutoForm.hooks({
	personalInfoForm: 
	{
		onSuccess: function(error,result) 
    {
      if (error){
      	console.log(error);
      }
      else{
      	console.log("this: " + this._id);
      	console.log(result, {_id: result});
      	console.log('inserted');
      }
    }
	} 
});
