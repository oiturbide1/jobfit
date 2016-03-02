Template.pi.events({
  "submit form": function (event) {
      // Prevent default browser form submit
      event.preventDefault();

      // Get value from form element
      var email = event.target.email.value;
      var zipCode= event.target.zip.value;
      var currentUserId = Meteor.userId;
      var user = Meteor.users.findOne(Meteor.userId);

      var loggedInUser = Meteor.user();
      
      /*
      if (Roles.userIsInRole(loggedInUser, 'talent')) {
        // NOTE: This example assumes the user is not using groups.
        console.log('in role');
        return true;

      }
      else {
        console.log('nope');
      }
      */





      // Insert a task into the collection
      Meteor.users.update(
        {_id: Meteor.userId()}, {$set: {"profile.info.zip": zipCode} }
      );


      // Clear form
      event.target.email.value = "";
      event.target.zip.value = '';

      console.log('updated');
      //console.log(zipCode);

    }

});

Template.user.helpers({
  email: function() {
    return Meteor.user().emails[0].address;
  }
});

Template.educ.events({
  "submit form": function (event, template) {
      // Prevent default browser form submit
      event.preventDefault();

      // Get value from form element
      var school = event.target.school.value;
      var degree= event.target.degree.value;
      var subject= event.target.field.value;
      var user = Meteor.userId;



      // Add education info to profile
      Meteor.users.update(
        {_id: Meteor.userId()}, 
        {$set: {
          "profile.education.school": school,
          "profile.education.degree": degree, 
          "profile.education.field": subject 
        } 
        });


      // Clear form
      event.target.school.value = "";
      event.target.degree.value = '';
      event.target.field.value = '';

      console.log(school);
      //console.log(array);


    }


});



Template.skills.events({
  "submit form": function (event, template) {
      // Prevent default browser form submit
      event.preventDefault();

      // Get value from form element
      var skill1 = event.target.skill1.value;
      var skill2= event.target.skill2.value;
      var skill3= event.target.skill3.value;
      //var skill4 = event.target.skill4.value;
      //var skill5 = event.target.skill5.value;

     

      var user = Meteor.userId;


      // Add skill info to profile
      Meteor.users.update(
        {_id: Meteor.userId()}, {$set: 
          {"profile.skills.skill1": skill1, 
          'profile.skills.skill2': skill2, 
          'profile.skills.skill3':skill3 
        } 
      });



    }


});

Template.creds.events({
  "submit form": function (event, template) {
      // Prevent default browser form submit
      event.preventDefault();

      // Get value from form element
      var credentials = event.target.creds.value;
      var certificate= event.target.certificate.value;

     
      var user = Meteor.userId;


      // Add skill info to profile
      Meteor.users.update(
        {_id: Meteor.userId()}, {$set: 
          {"profile.credentials.creds": credentials, 
          'profile.credentials.certificate': certificate
        } 
      });



    }


});


Template.occupationInfo.events({
  "submit form": function (event, template) {
      // Prevent default browser form submit
      event.preventDefault();

      // Get value from form element
      var industry = event.target.industry.value;
      var occupation= event.target.occupation.value;
      var level= event.target.jobLevel.value;
    
    
      var user = Meteor.userId;

      // Add skill info to profile
      Meteor.users.update(
        {_id: Meteor.userId()}, {$set: {
          "profile.ocupation_info.industry": industry,
          "profile.ocupation_info.occupation": occupation, 
          "profile.ocupation_info.jobLevel": level 
        } 
      });



    }


});
