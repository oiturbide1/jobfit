Template.employerRatings.events({
        'submit form': function(event) {

          event.preventDefault();

          var wlb = AutoForm.getFieldValue('work_life_balance','ESurveyForm');
          var sec = AutoForm.getFieldValue('job_security','ESurveyForm');
          var dev = AutoForm.getFieldValue('development_opportunities','ESurveyForm');
          var work = AutoForm.getFieldValue('workload','ESurveyForm');
          var path = AutoForm.getFieldValue('career_path','ESurveyForm');
          var criteria = AutoForm.getFieldValue('promotion_criteria','ESurveyForm');
          var opp = AutoForm.getFieldValue('promotion_opportunities','ESurveyForm');
          var freedom = AutoForm.getFieldValue('freedom','ESurveyForm');
          var salary = AutoForm.getFieldValue('salary','ESurveyForm');
          var manage = AutoForm.getFieldValue('good_sup','ESurveyForm');
          var check = AutoForm.getFieldValue('careless','ESurveyForm');
          var miss = AutoForm.getFieldValue('mission','ESurveyForm');
          var health = AutoForm.getFieldValue('health','ESurveyForm');
          var space = AutoForm.getFieldValue('workspace','ESurveyForm');
          var recog = AutoForm.getFieldValue('rewrecog','ESurveyForm');
          var poor = AutoForm.getFieldValue('poor_perfs','ESurveyForm');
          var flex = AutoForm.getFieldValue('flex','ESurveyForm');
          var perf = AutoForm.getFieldValue('rew_perf','ESurveyForm');



          var user = Meteor.userId();
          var currentSurvey = Session.get('Survey');



          var survey =
          [
            wlb,
            sec,
            dev,
            work,
            path,
            criteria,
            opp,
            freedom,
            salary,
            manage,
            check,
            miss,
            health,
            space,
            recog,
            poor,
            flex,
            perf
          ];



          Meteor.call('update_Emp_Survey', currentSurvey, survey);

          if(user)
          {
            Meteor.call('update_userSurvey', currentSurvey, 'employer');
          }



          if(!user)
          {
            Router.go("/success");
          }



        }
      });
