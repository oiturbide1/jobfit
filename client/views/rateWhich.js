Template.rateCurrentEmployerInfo.events({
  "submit form": function(event, template)
  {
    event.preventDefault();

    var company = event.target.companyName.value;
    var address = event.target.address.value;
    var city = event.target.city.value;
    var state = event.target.state.value;
    var zip = event.target.zip.value;


    var cName = Company.find({companyName: company, address: address}).fetch();

    Session.set('name',cName);
    var check = Session.get('name');
    //if(check){
      //console.log('found');
    //}
    //else{
      //console.log('not found');
    //}
    //console.log(check);

    //need to add logic for capturing data and inserting into companys in DB

    Router.go('/rateCEmployer');

  }
});


Template.rateFormerEmployerInfo.events({
  "submit form": function(event, template)
  {
    event.preventDefault();

    //need to add logic for capturing data and inserting into companys in DB

    Router.go('/rateFEmployer');

  }
});
