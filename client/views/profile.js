Template.profile.helpers({
  email: function() {
    return Meteor.user().emails[0].address;
  },

  join_date: function(){
    var user_date = Meteor.user().profile.timeStamp;;
    
    return user_date;
  },
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

Template.profile.events({
    'click #test': function () {
      
      var user = Meteor.user().profile.timeStamp;
      //var p = user;
      //var s = PersonalSurvey.find(user).fetch()[0].timeStamp;
      console.log(user);
    }
  });
