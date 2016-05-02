Template.overview.helpers({
  email: function() {
    return Meteor.user().emails[0].address;
  }
});


Template.overDashboard.events({
    'click .logout': function(event){
        event.preventDefault();
        Meteor.logout();
        Router.go('home');
    }
});

Template.overDashboard.helpers({
  email: function() {
    return Meteor.user().emails[0].address;
  }

});

Template.overMain.helpers({
  talent: function() {
    return Roles.userIsInRole(Meteor.userId(), 'Talent');
  }

});
