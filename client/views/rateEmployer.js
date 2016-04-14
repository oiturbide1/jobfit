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
          var user = Meteor.userId;
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
            manage
          ];



          Meteor.call('add_Survey', currentSurvey, survey);
          if(user)
          {
            Meteor.call('update_userSurvey', currentSurvey);
          }
        


          if(!Meteor.userId()){
            Router.go("/success");
          }



        }
      });
