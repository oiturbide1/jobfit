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



var check = Session.get('name');

//working on check if company exist already (w/ same name and address)
var checkHooks = {
  before: {
    insert: function(doc){
      if(check){
        console.log('found');
        //Session.set('foundCompany',)
      }
      else{
        console.log('nf');
      }
    }
  }
};

//AutoForm.addHooks('companyInfoForm', checkHooks);
AutoForm.addHooks('companyInfoForm',
{
  onSuccess: function()
  {
    Session.set('currentCompany', this.docId);
    var currentCompany = Session.get('currentCompany');
    //console.log(currentCompany);
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
