Template.talentviewsurvey.events({
	"submit form": function (event, template) {
      // Prevent default browser form submit
      event.preventDefault();

      var wb = event.target.wlb.value;
      var js = event.target.jobSec.value;
      var td = event.target.develop.value;
      var wload = event.target.wload.value;
      var cpath = event.target.path.value;
      var crit = event.target.criteria.value;
      var opp = event.target.opportunities.value;
      var free = event.target.freedom.value;
      var sal = event.target.salary.value;


      console.log(wb);

      var user = Meteor.userId;

      survey = 
      {'worklife_self': wb, 
      'jobsec_self': js, 
      'td_self':td, 
      'workload_self': wload,
      'careerpath_self': cpath,
      'promocrit_self': crit,
      'promo_self': opp,
      'auton_self': free,
      'salary_self': sal
      }

      PersonalSurvey.insert(survey, function(err,docsInserted)
      {
        var sur = PersonalSurvey.find({_id: docsInserted});
        console.log(sur);
        console.log(docsInserted);
        Meteor.users.update(
        {_id: Meteor.userId()}, 
        {$push: {
          "profile.personal_survey": docsInserted
        } 
        });
      });

  }


});




CollectionSchema = new SimpleSchema({
  wlb: {
    type: Number,
    label: 'Work Life Balance',
    optional: true,
    autoform: {
      afFieldInput: {
        type: "range",
        min: 1,
        max:5,
        steps: 1,
        value: 3,
        list: 'options'
      }
    }
  }
});

