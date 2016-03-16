Template.employerInfo.events({
  "submit form": function(event, template)
  {
    event.preventDefault();

    var company = event.target.companyName.value;
    var address = event.target.address.value;
    var city = event.target.city.value;
    var state = event.target.state.value;
    var zip = event.target.zip.value;

    comp = 
    {
      'companyName': company,
      'address': address,
      'city': city,
      'state': state,
      'zip': zip
    }

    Company.insert(comp, function(err,docsInserted)
    {
      var cp = Company.find({_id: docsInserted});
      console.log(cp);
      Session.set('current_company', docsInserted);

      //Meteor.users.update(
      //{_id: Meteor.userId()}, 
      //{$push: {
        //"profile.personal_survey": docsInserted
      //} 
      //});
    });

    var c = Session.get('current_company');
    console.log(c);
    var check = Session.get('name');
    //if(check){
      //console.log('found');
    //}
    //else{
      //console.log('not found');
    //}
    //console.log(check);

    //need to add logic for capturing data and inserting into companys in DB

    //Router.go('/rateCEmployer');

  }
});