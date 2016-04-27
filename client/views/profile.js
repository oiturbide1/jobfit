Template.profile.helpers({
  email: function() {
    return Meteor.user().emails[0].address;
  },

  date: function(){
    var useri = Meteor.user().profile.personal_survey[0];
    var surv = PersonalSurvey.find(useri);
    return surv.timeStamp;
    //return Meteor.user().profile.info.gender;
  }
});

Template.profileDashboard.events({
    'click .logout': function(event){
        event.preventDefault();
        Meteor.logout();
    }
});

Template.profileDashboard.helpers({
  email: function() {
    return Meteor.user().emails[0].address;
  }

});
