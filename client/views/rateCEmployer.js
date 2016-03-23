Template.currentEmployerRatings.events({
        'submit form': function(event) {

          event.preventDefault();

          var wlb = event.target.work_life_balance.value;
          var sec = event.target.jobSec.value;
          var dev = event.target.jobDev.value;
          var work = event.target.jobWorkLoad.value;
          var path = event.target.jobCareer.value;
          var criteria = event.target.jobPromoCrit.value;
          var opp = event.target.jobPromoOpp.value;
          var freedom = event.target.jobFree.value;
          var salary = event.target.jobSalary.value;
          var manage = event.target.jobManager.value;




          var currentCompany = Session.get('currentCompany');
          console.log(currentCompany);


          Company.update(
        {_id: currentCompany}, 
        {$set: {
          "work_life_balance.work_life_balance": wlb, 
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


          //Router.go("/information");
          console.log(wlb);
          console.log(sec);
          console.log('data added');


        }
      });