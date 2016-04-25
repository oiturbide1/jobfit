Template.infoDashboard.events({
    'click .logout': function(event){
        event.preventDefault();
        Meteor.logout();
    }
});

Template.infoDashboard.helpers({
  email: function() {
    return Meteor.user().emails[0].address;
  }
});


Template.information.events({
  'click .resend-verification-link' ( event, template ) {
    Meteor.call('sendVerificationLink', ( error, response ) => {
      if ( error ) {
        Bert.alert( error.reason);
      } else {
        var email = Meteor.user().emails[ 0 ].address;
        Bert.alert( `Verification sent to ${ email }!`, 'success', 'growl-top-right');
      }
    });
  }

});


Template.pi.onRendered(function(){
    $('#personalInFoForm').validate(

      {
          rules:
          {
            zip:
            {
              required: true,
              zipcodeUS: true,
              valid: false
            },
            gender:
            {
              valid: false
            }
          },

          messages:
          {
              zip:
              {
                required: "You must enter your zip.",
                zipcodeUS: 'Your zip is invalid'
              }
          }

      });
    });



Template.pi.events({
  "submit form": function (event) {
      // Prevent default browser form submit
      event.preventDefault();

      // Get value from form element
      var gender = event.target.gender.value;
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
        {_id: Meteor.userId()},
        {$set: {
          "profile.info.zip": zipCode,
          "profile.info.gender": gender
      }
      });

      JobExplorer.insert({'gender': gender});


      // Clear form

      event.target.zip.value = '';


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
      var level= event.target.level.value;
      var user = Meteor.userId;



      // Add education info to profile
      Meteor.users.update(
        {_id: Meteor.userId()},
        {$set: {
          "profile.education.school": school,
          "profile.education.degree": degree,
          "profile.education.field": subject,
          "profile.education.level": level
        }
        });


      // Clear form
      event.target.school.value = "";
      event.target.degree.value = '';
      event.target.field.value = '';

    }


});



Template.skills.events({
  "submit form": function (event, template) {
      // Prevent default browser form submit
      event.preventDefault();


      // Get value from form element
      var skill1 = AutoForm.getFieldValue('skills.0','skillsForm');
      var skill2 = AutoForm.getFieldValue('skills.1','skillsForm');
      var skill3 = AutoForm.getFieldValue('skills.2','skillsForm');
      var skill4 = AutoForm.getFieldValue('skills.3','skillsForm');
      var skill5 = AutoForm.getFieldValue('skills.4','skillsForm');


      var user = Meteor.userId;


      // Add skill info to profile
      Meteor.users.update(
        {_id: Meteor.userId()}, {$set:
          {"profile.skills.skills": [skill1, skill2, skill3, skill4, skill5] }
      });



    }


});


Template.creds.events({
  "submit form": function (event, template) {
      // Prevent default browser form submit
      event.preventDefault();

      // Get value from form element
      var cred1 = AutoForm.getFieldValue('creds.0','credsForm');
      var cred2 = AutoForm.getFieldValue('creds.1','credsForm');
      var cred3 = AutoForm.getFieldValue('creds.2','credsForm');


      var user = Meteor.userId;


      // Add skill info to profile
      Meteor.users.update(
        {_id: Meteor.userId()}, {$set:
          {"profile.credentials.creds": [ cred1, cred2, cred3] }
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
      var joblevel= event.target.jobLevel.value;




      var user = Meteor.userId;

      Meteor.users.update(
        {_id: Meteor.userId()},
        {$set: {
          "profile.occupation_info.industry": industry,
          "profile.occupation_info.occupation": occupation,
          "profile.occupation_info.jobLevel": joblevel
        }
      });


      event.target.industry.value = "";
      event.target.occupation.value = '';
      event.target.jobLevel.value = '';

    }


});
