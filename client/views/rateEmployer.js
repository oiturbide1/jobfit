Template.employerRatings.events({
        'submit form': function(event) {

          event.preventDefault();

          var wlb = event.target.work_life_balance.value;
          var sec = event.target.job_security.value;
          var dev = event.target.development_opportunities.value;
          var work = event.target.workload.value;
          var path = event.target.career_path.value;
          var criteria = event.target.promotion_criteria.value;
          var opp = event.target.promotion_opportunities.value;
          var freedom = event.target.freedom.value;
          var salary = event.target.salary.value;
          var manage = event.target.good_sup.value;

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
          
          //Router.go("/information");

        }
      });