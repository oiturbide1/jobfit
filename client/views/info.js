/*
//function to whether zip code is valid
$.validator.addMethod("zipcodeUS", function(value, element) {
    return this.optional(element) || /\d{5}-\d{4}$|^\d{5}$/.test(value)
}, "The specified US ZIP Code is invalid");


Template.pi.onRendered(function(){
    $('#personalInFoForm').validate(

      {
          rules:
          {
            zip:
            {
              required: true,
              zipcodeUS: true
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
*/



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


      // Clear form
     
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

      console.log(school);
      console.log(level);
      


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
      //var skill2= event.target.'skills.1'.value;
      //var skill3= event.target.'skills.2'.value;
      //var skill4 = event.target.skill4.value;
      //var skill5 = event.target.skill5.value;
      console.log(skill1);
      console.log(skill2);
      console.log(skill3);
     

      var user = Meteor.userId;


      // Add skill info to profile
      Meteor.users.update(
        {_id: Meteor.userId()}, {$set: 
          {"profile.skills.skills": [skill1, skill2, skill3] } 
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
      
      console.log(cred1);
      console.log(cred2);
  

     
      var user = Meteor.userId;


      // Add skill info to profile
      Meteor.users.update(
        {_id: Meteor.userId()}, {$set: 
          {"profile.credentials.creds": [ cred1, cred2] } 
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


      console.log(industry);
      console.log(occupation);
      console.log(joblevel);
        
      var user = Meteor.userId;

      Meteor.users.update(
        {_id: Meteor.userId()}, 
        {$set: {
          "profile.occupation_info.industry": industry,
          "profile.occupation_info.occupation": occupation, 
          "profile.occupation_info.jobLevel": joblevel
        } 
      });



    }


});
