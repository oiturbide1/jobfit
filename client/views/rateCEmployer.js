Template.currentEmployerRatings.events({
        'submit form': function(event) {

          event.preventDefault();

          var wlb = event.target.jobBal.value;
          var sec = event.target.jobSec.value;


          Company.update(
        {_id: currentCompany}, {$set: {"work_life_balance": wlb} }
      );


          //Router.go("/information");
          console.log(wlb);
          console.log(sec);
          console.log('data added');


        }
      });