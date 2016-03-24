Template.currentEmployerRatings.events({
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
          console.log(cf);


          survey = {
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
              console.log(sur);
              console.log(docsInserted);
              Meteor.users.update(
              {_id: Meteor.userId()}, 
              {$push: {
                "profile.current_survey": docsInserted
              } 
              });
            });
          }

          /*
          if(cf == 'former'){
            FormerEmployerSurvey.insert(survey);
            console.log('added former');
          }
          */


          var currentCompany = Session.get('currentCompany');
          console.log(currentCompany);

          /*
          Company.update(
        {_id: currentCompany}, 
        {$set: {
          "work_life_balance": wlb, 
          'work_life_balance.count': 2, 
          'job_security.security': sec, 
          'job_security.count': 1, 
          'development_opportunities.development': dev, 
          'development_opportunities.count': 1, 
          'workload.workload': work, 
          'workload.count':1, 
          'career_path.career_path': path, 
          'career_path.count': 1, 
          'promotion_criteria.promotion_criteria': criteria, 
          'promotion_criteria.count': 1, 
          'promotion_opportunities.promotion_opportunities': opp, 
          'promotion_opportunities.count': 1, 
          'freedom.freedom': freedom, 
          'freedom.count': 1, 
          'salary.salary': salary, 
          'salary.count': 1, 
          'management.management': manage, 
          'management.count': 1

        } 
        }
      );
        */


          //Router.go("/information");
          console.log(wlb);
          console.log(sec);
          console.log('data added');


        }
      });