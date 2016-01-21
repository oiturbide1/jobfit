Template.register.events({
        'submit form': function(event) {
          event.preventDefault();
          console.log('form submitted');
          var userVar = event.target.registerUsername.value;
          var passwordVar = event.target.registerPassword.value;

          console.log(userVar);
          Accounts.createUser({
            user: userVar,
            password: passwordVar
          });
        }
      });





Template.pi.events({
  "submit form": function (event) {
      // Prevent default browser form submit
      event.preventDefault();

      // Get value from form element
      var email = event.target.email.value;
      var zipCode= event.target.zip.value;
      var currentUserId = Meteor.userId;
      var user = Meteor.users.findOne(Meteor.userId);


      // Insert a task into the collection
      Meteor.users.update(
        {_id: Meteor.userId()}, {$set: {"profile.address": [email,zipCode]} }
      );


      // Clear form
      event.target.email.value = "";
      event.target.zip.value = '';

      console.log('updated');
    }

});

Template.educ.events({
  "submit form": function (event, template) {
      // Prevent default browser form submit
      event.preventDefault();

      // Get value from form element
      var school = event.target.school.value;
      var degree= event.target.degree.value;
      var subject= event.target.subject.value;
      var user = Meteor.userId;


      // Add education info to profile
      Meteor.users.update(
        {_id: Meteor.userId()}, {$set: {"profile.education": [school,degree,subject]} }
      );


      // Clear form
      event.target.school.value = "";
      event.target.degree.value = '';
      event.target.subject.value = '';

      console.log('school');
      console.log('test');

      var selected = template.findAll( "input[type=checkbox]:checked");

      var array = selected.map(function(item)
      { return item.value})


      console.log(array);

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
      var skill4 = event.target.skill4.value;
      var skill5 = event.target.skill5.value;
      var user = Meteor.userId;


      // Add skill info to profile
      Meteor.users.update(
        {_id: Meteor.userId()}, {$set: {"profile.skills": [skill1,skill2,skill3,skill4,skill5]} }
      );




      // Clear form
      event.target.skill1.value = "";
      event.target.skill2.value = '';
      event.target.skill3.value = '';
      event.target.skill4.value = '';
      event.target.skill5.value = '';

      console.log(skill3);



    }


});


Template.occupationInfo.events({
  "submit form": function (event, template) {
      // Prevent default browser form submit
      event.preventDefault();

      // Get value from form element
      var industry = event.target.industry.value;
      var occupation= event.target.occupation.value;
      var jobLevel= event.target.jobLevel.value;

      var user = Meteor.userId;


      // Add occupation info to profile
      Meteor.users.update(
        {_id: Meteor.userId()}, {$set: {"profile.occupation": [industry,occupation,jobLevel,]} }
      );




      // Clear form
      event.target.industry.value = "";
      event.target.occupation.value = '';
      event.target.jobLevel.value = '';


      console.log(occupation);



    }


});



Template.employerInfo.events({
  "submit form": function (event, template) {
      // Prevent default browser form submit
      event.preventDefault();

      // Get value from form element
      var company = event.target.companyName.value;
      var street= event.target.street.value;
      var city= event.target.city.value;
      var state = event.target.state.value;
      var zipcode = event.target.zip.value;
      var user = Meteor.userId;


      // Add current employer info to profile
      Meteor.users.update(
        {_id: Meteor.userId()}, {$set: {"profile.currentEmployer": [company,street,city,state,zipcode]} }
      );


      // Clear form
      event.target.companyName.value = "";
      event.target.street.value = '';
      event.target.city.value = '';
      event.target.state.value = '';
      event.target.zip.value = '';

      console.log('company info');


      var selected = template.findAll( "input[type=checkbox]:checked");

      var array = selected.map(function(item)
      { return item.value})


      console.log(array);

    }


});


Template.jobInfo.events({
  "submit form": function (event, template) {
      // Prevent default browser form submit
      event.preventDefault();

      // Get value from form element
      var title = event.target.jobtitle.value;
      var pDate= event.target.promotiondate.value;
      var sDate= event.target.startdate.value;
      var pTimes = event.target.timespromoted.value;
      var user = Meteor.userId;


      // Add job info to profile
      Meteor.users.update(
        {_id: Meteor.userId()}, {$set: {"profile.jobInfo": [title,pDate,sDate,pTimes]} }
      );


      // Clear form
      event.target.jobtitle.value = "";
      event.target.promotiondate.value = '';
      event.target.startdate.value = '';
      event.target.timespromoted.value = '';


      console.log('job info');


      var selected = template.findAll( "input[type=checkbox]:checked");

      var array = selected.map(function(item)
      { return item.value})


      console.log(array);

    }


});


Template.home.events({
  "click input": function (event, template) {
          // Prevent default browser form submit
          event.preventDefault();

          /*
          var user = Meteor.users.findOne(Meteor.userId);


          // Insert a task into the collection
          Meteor.users.update(
            {_id: user._id}, {$set: {"profile.education": [school,degree,subject]} }
          );

          */



          //var thing1 = template.find('input:radio[name= userType]:checked').value;

          //console.log(thing1);

        }

      });




      Template.home.helpers({
        'checkType': function(typeUser)
        {
          if (typeUser == 'talent')
          {
            return true;
          }
          else
          {
            return false;
          }
        }
      });


      Accounts.ui.config
      ({
        passwordSignupFields: "USERNAME_ONLY"
      });
