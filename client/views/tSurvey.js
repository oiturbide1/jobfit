Template.talentviewsurvey.events({
	"submit form": function (event, template) {
      // Prevent default browser form submit
      event.preventDefault();

      var worklife = AutoForm.getFieldValue('worklife_self','talentsurvey');
      var jobsec = AutoForm.getFieldValue('jobsec_self','talentsurvey');
      var td = AutoForm.getFieldValue('td_self','talentsurvey');
      var workload = AutoForm.getFieldValue('workload_self','talentsurvey');
      var cpath = AutoForm.getFieldValue('careerpath_self','talentsurvey');
      var crit = AutoForm.getFieldValue('promocrit_self','talentsurvey');
      var opp = AutoForm.getFieldValue('promo_self','talentsurvey');
      var free = AutoForm.getFieldValue('auton_self','talentsurvey');
      var sal = AutoForm.getFieldValue('salary_self','talentsurvey');
      var sup = AutoForm.getFieldValue('goodsup_self','talentsurvey');
      var flex = AutoForm.getFieldValue('flex_self','talentsurvey');
      var perf = AutoForm.getFieldValue('rewperf_self','talentsurvey');
      var miss = AutoForm.getFieldValue('mission_self','talentsurvey');
      var health = AutoForm.getFieldValue('health_self','talentsurvey');
      var recog = AutoForm.getFieldValue('rewrecog_self','talentsurvey');
      var space = AutoForm.getFieldValue('workspace_self','talentsurvey');
      var poor = AutoForm.getFieldValue('poorperfs_self','talentsurvey');



      var user = Meteor.userId;



      survey =
      {'worklife_self': worklife,
      'jobsec_self': jobsec,
      'td_self':td,
      'workload_self': workload,
      'careerpath_self': cpath,
      'promocrit_self': crit,
      'promo_self': opp,
      'auton_self': free,
      'salary_self': sal,
      'goodsup_self': sup,
      'flex_self':flex,
      'rewperf_self':perf,
      'mission_self':miss,
      'health_self':health,
      'rewrecog_self':recog,
      'workspace_self':space,
      'poorperfs_self':poor
      }

      PersonalSurvey.insert(survey, function(err,docsInserted)
      {
        var sur = PersonalSurvey.find({_id: docsInserted});
        //console.log(sur);
        //console.log(docsInserted);
        Meteor.users.update(
        {_id: Meteor.userId()},
        {$push: {
          "profile.personal_survey": docsInserted
        }
        });
      });


      var survey_id = Meteor.user().profile.personal_survey[0];
      if (survey_id){
        console.log('true');
      }
      else{
        console.log('false');
      }

      var survey_date = PersonalSurvey.findOne({_id: survey_id});
			console.log(survey_date.timeStamp);

      var utc = new Date();
      console.log(utc);

      if (survey_date.timeStamp == utc){
        console.log('today');
      }


      var u = new Date(survey_date);
      var offset = u.getTimezoneOffset() * 60 * 1000;
      var withOffset = u.getTime();
      var withoutOffset = withOffset - offset;


      console.log(withOffset);
      console.log(withoutOffset);


      function days_between(date1, date2)
      {

        // The number of milliseconds in one day
        var ONE_DAY = 1000 * 60 * 60 * 24

        // Convert both dates to milliseconds
        var date1_ms = date1.getTime()
        var date2_ms = date2.getTime()

        // Calculate the difference in milliseconds
        var difference_ms = Math.abs(date1_ms - date2_ms)

        // Convert back to days and return
        return Math.round(difference_ms/ONE_DAY)

      }

      //var test = days_between(utc, survey_date);
      //console.log(test);



      Router.go('/Emp');






  }


});
