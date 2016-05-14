Template.profileMain.helpers({
  email: function() {
    return Meteor.user().emails[0].address;
  },

  join_date: function(){
    var user_date = Meteor.user().profile.timeStamp;

    user_date = moment(user_date).fromNow();

    return user_date;
  },

  employers: function(){
    return Session.get('rated_companies');
  },

  date_rated: function(){
    return Session.get('rating_dates');
  },

  emp_rate_check: function()
  {
    Meteor.call('get_employer_surveys', function(err,result){
        if (result.length >0)
          return true;
        else
          return false;
      });
  },

  per_rate_check: function()
  {
    var check = null;
    Meteor.call('get_personal_surveys', function(err,result){
        if (result.length >0)
          check = true;
        else
          check = false;
      });

    return check;
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

      Meteor.call('get_employer_surveys', function(err,result){
        if (result.length >0)
        {
          console.log(result);
          for (x in result){
            var test = EmployerSurvey.find({'_id': result[x]}).fetch();
          console.log(test);
        }
        }
        else
          console.log('nothing');
      });


    }
  });
