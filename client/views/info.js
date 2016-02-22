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

      console.log(skill2)

      var user = Meteor.userId;


      // Add skill info to profile
      Meteor.users.update(
        {_id: Meteor.userId()}, {$set: {"profile.skills": [skill1,skill2,skill3,skill4,skill5]} }
      );



    }


});