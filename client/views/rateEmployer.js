Template.employerRatings.events({
        'submit form': function(event) {

          event.preventDefault();

          var wlb = AutoForm.getFieldValue('work_life_balance','CESurveyForm');
          var sec = AutoForm.getFieldValue('job_security','CESurveyForm');
          var dev = AutoForm.getFieldValue('development_opportunities','CESurveyForm');
          var work = AutoForm.getFieldValue('workload','CESurveyForm');
          var path = AutoForm.getFieldValue('career_path','CESurveyForm');
          var criteria = AutoForm.getFieldValue('promotion_criteria','CESurveyForm');
          var opp = AutoForm.getFieldValue('promotion_opportunities','CESurveyForm');
          var freedom = AutoForm.getFieldValue('freedom','CESurveyForm');
          var salary = AutoForm.getFieldValue('salary','CESurveyForm');
          var manage = AutoForm.getFieldValue('good_sup','CESurveyForm');

          var user = Meteor.userId;
          var currentSurvey = Session.get('Survey');
          console.log(path);
    

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

          console.log(wlb);
          console.log(survey[0]);

          Meteor.call('add_Survey', currentSurvey, survey, function( err, docInserted)
          {
            if (err)
            {
              console.log(err);
            }
            else
            {
              console.log(docInserted);
              if(user)
              {
                //Meteor.call('update_usercurrentSurvey', docInserted)
              }
              
            }
          });

          
          
          if(!Meteor.userId()){
            Router.go("/success");
          }
          

        }
      });