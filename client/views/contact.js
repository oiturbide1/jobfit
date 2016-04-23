Template.contactDashboard.events({
    'click .logout': function(event){
        event.preventDefault();
        Meteor.logout();
    }
});

Template.contactDashboard.helpers({
  email: function() {
    return Meteor.user().emails[0].address;
  }
});
