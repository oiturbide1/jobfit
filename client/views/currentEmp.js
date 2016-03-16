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


Template.jobInfo.events({
  "submit form": function (event, template) {
      // Prevent default browser form submit
      event.preventDefault();

      // Get value from form element
      var pDate= AutoForm.getFieldValue('promo_date.0','jobInfoForm');
      var title = event.target.title.value;
      var sDate= event.target.start_date.value;
      var promo = event.target.promoted.value;
      var user = Meteor.userId;


      //Add job info to profile
      Meteor.users.update(
        {_id: Meteor.userId()}, {$set: {
          "profile.job_info.title": title,
          "profile.job_info.start_date": sDate,
          'profile.job_info.promoted': promo,
          'profile.job_info.promo_date':[pDate]
          } }
      );


      // Clear form
      


      console.log('job info');
      console.log(promo);
      console.log(sDate);


  

    }


});

Template.empStatus.events({
  "submit form": function (event, template) {
      // Prevent default browser form submit
      event.preventDefault();

      // Get value from form element
      var status = event.target.status.value;
      var hrs= event.target.hours.value;
      
      if (AutoForm.getFieldValue('other','statusForm'))
      {
        var other = event.target.other.value;
      }
      var user = Meteor.userId;


      //Add job info to profile
      Meteor.users.update(
        {_id: Meteor.userId()}, {$set: {
          "profile.status.status": status,
          "profile.status.hours": hrs,
          'profile.status.other': other
          } }
      );


      // Clear form
      


      console.log('job info');
      console.log(other);


  

    }


});