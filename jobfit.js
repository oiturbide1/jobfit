Router.route('/', {name: 'home', template: 'home'});
Router.route('/information',{name: 'information', template: 'information'})
Router.route('/profile');
Router.route('/currentEmp');
Router.route('/formerEmp');
Router.route('/tSurvey');
Router.route('/rateEmployer');
Router.route('/rateFEmployer');
Router.route('/registerTalent');
Router.route('/registerRep');
Router.route('/login');
Router.route('/rateWhich');
Router.route('/rateCurrentEmployerInfo');
Router.route('/rateFormerEmployerInfo');
Router.route('/employerInfo');
Router.route('/Emp');

/*
if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
*/
