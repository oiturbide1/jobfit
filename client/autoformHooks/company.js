/*var compHooks = {
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
}*/


AutoForm.addHooks('companyInfoForm', 
{
  onSuccess: function() 
  {
    Session.set('currentCompany', this.docId);
    var currentCompany = Session.get('currentCompany');
    console.log(currentCompany);
  }
});



/*AutoForm.hooks({
  companyInfoForm: 
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
        console.log(this.docId);
      }
    }
  } 
});
*/
