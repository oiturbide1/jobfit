Template.aboutDashboard.events({
    'click .logout': function(event){
        event.preventDefault();
        Meteor.logout();
    }
});

Template.aboutDashboard.helpers({
  email: function() {
    return Meteor.user().emails[0].address;
  }
});
