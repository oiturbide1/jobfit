Template.profileMain.helpers({
  email: function() {
    return Meteor.user().emails[0].address;
  },

  join_date: function(){
    var user_date = Meteor.user().profile.timeStamp;;

    return user_date;
  },

  employers: function(){
    return Session.get('rated_companies');


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

      Meteor.call('check_if_company_rated','snickers');

    }
  });
