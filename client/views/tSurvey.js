Template.pSurvey1.events({
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
			var check = AutoForm.getFieldValue('careless_self','talentsurvey');

      var user = Meteor.userId;


      survey =
      [
        worklife,
        jobsec,
        td,
        workload,
        cpath,
        crit,
        opp,
        free,
        sal,
        sup,
        flex,
        perf,
        miss,
        health,
        recog,
        space,
        poor,
  			check
      ]


			Meteor.call('checkSurveyDate', 'personal', function(err, editable){
				if (err)
				{
					console.log(err);
				}
				else
				{
					if (editable)
					{
						//allow
						Meteor.call('add_Personal_Survey', survey, function(error, insertedSurvey)
			      {
			        if (error)
			        {
			          console.log(error);
			        }
			        else
			        {
								Meteor.call('update_userSurvey', insertedSurvey,'personal');

			        }
			      });

					}
					else
          {
            Session.set('allow_survey', false);
						//Bert.alert('too soon');
					}
				}
			});



      Router.go('/tSurvey2View');



  }


});

Template.tSurveyDashboard.events({
    'click .logout': function(event){
        event.preventDefault();
        Meteor.logout();
        Router.go('home');
    }
});

Template.tSurveyDashboard.helpers({
  email: function() {
    return Meteor.user().emails[0].address;
  }
});

Template.tSurvey.helpers({
  allowSurvey: function(){
    return Session.get('allow_survey');
  }
});
