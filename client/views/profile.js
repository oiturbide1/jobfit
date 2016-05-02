Template.profileMain.helpers({
  email: function() {
    return Meteor.user().emails[0].address;
  },

  join_date: function(){
    var user_date = Meteor.user().profile.timeStamp;;

    return user_date;
  },

  employers: function(){
    var user_eSurveys = Meteor.user().profile.employer_survey;
    for (survey in user_eSurveys)
    {
      return EmployerSurvey.find(survey).fetch().company;
    }


  }
});


Template.profileDashboard.events({
    'click .logout': function(event){
        event.preventDefault();
        Meteor.logout();
        Router.go('home');
    }
});

Template.profileDashboard.helpers({
  email: function() {
    return Meteor.user().emails[0].address;
  }

});

Template.profileMain.events({
    'click #test': function () {

      var user_eSurveys = Meteor.user().profile.employer_survey;
      for (survey in user_eSurveys)
      {
        console.log(survey);
      }
      console.log(user_eSurveys);
    }
  });
