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

          var rem = Session.get('rem');
          var cf = Session.get('current_former');
          var currentCompany = Session.get('current_comp');
    
          console.log(cf);


          survey = {
            "company": currentCompany,
            "work_life_balance": wlb, 
            'job_security': sec, 
            'development_opportunities': dev, 
            'workload': work, 
            'career_path': path, 
            'promotion_criteria': criteria, 
            'promotion_opportunities': opp, 
            'freedom': freedom, 
            'salary': salary,  
            'good_sup': manage, 
            'remote': rem

          }

          var user = Meteor.userId;

          
          if(cf == 'current')
          {
            console.log('added current');
            CurrentEmployerSurvey.insert(survey, function(err,docsInserted)
            {
              var sur = CurrentEmployerSurvey.find({_id: docsInserted});
              //console.log(docsInserted);
              Meteor.users.update(
              {_id: Meteor.userId()}, 
              {$push: {
                "profile.current_survey": docsInserted
              } 
              });
            });
          }

          
          if(cf == 'former')
          {
            FormerEmployerSurvey.insert(survey, function(err,docsInserted)
            {
              var sur = FormerEmployerSurvey.find({_id: docsInserted});
              //console.log(docsInserted);
              Meteor.users.update(
              {_id: Meteor.userId()}, 
              {$push: {
                "profile.former_survey": docsInserted
              } 
              });
            });

            console.log('added former');
          }
          
          if(!Meteor.userId()){
            <div class="alert alert-success" role ='alert'>
              <strong>'Thank you for entering company ratings! Click here to return home'</strong>
            </div>
          }
          
          //Router.go("/information");

        }
      });