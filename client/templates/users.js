
Template.addUser.events({
  "submit form": function (event) {
      // Prevent default browser form submit
      event.preventDefault();

      // Get value from form element
      var userName = event.target.user.value;
      var pw = event.target.password.value;

      var currentUserId = Meteor.userId();


      // Insert a task into the collection
      Users.insert({
        username: userName,
        password: pw,
        createdBy: currentUserId,
        createdAt: new Date() // current time

      });


      // Clear form
      event.target.user.value = "";
      event.target.password.value = '';

      console.log('worked');
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
        {_id: user._id}, {$set: {"profile.address": zipCode} }
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
      var user = Meteor.users.findOne(Meteor.userId);


      // Insert a task into the collection
      Meteor.users.update(
        {_id: user._id}, {$set: {"profile.education": [school,degree,subject]} }
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
