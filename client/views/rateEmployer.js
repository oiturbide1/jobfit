Template.empFirst.events({
        'submit form': function(event) {

          event.preventDefault();

          //1st group
          var wlb = AutoForm.getFieldValue('work_life_balance','ESurveyForm1');
          var sec = AutoForm.getFieldValue('job_security','ESurveyForm1');
          var dev = AutoForm.getFieldValue('development_opportunities','ESurveyForm1');
          var work = AutoForm.getFieldValue('workload','ESurveyForm1');
          var path = AutoForm.getFieldValue('career_path','ESurveyForm1');

          Router.go('rateEmployer2');

        }
      });


Template.empSecond.events({
  'submit form': function(event){

    event.preventDefault();

    //2nd group
    var criteria = AutoForm.getFieldValue('promotion_criteria','ESurveyForm2');
    var opp = AutoForm.getFieldValue('promotion_opportunities','ESurveyForm2');
    var freedom = AutoForm.getFieldValue('freedom','ESurveyForm2');
    var salary = AutoForm.getFieldValue('salary','ESurveyForm2');
    var manage = AutoForm.getFieldValue('good_sup','ESurveyForm2');

    Router.go('rateEmployer3');

    }
    });


Template.empThird.events({
  'submit form': function(event){

    event.preventDefault();

    //3rd group
    var check = AutoForm.getFieldValue('careless','ESurveyForm3');
    var miss = AutoForm.getFieldValue('mission','ESurveyForm3');
    var health = AutoForm.getFieldValue('health','ESurveyForm3');
    var space = AutoForm.getFieldValue('workspace','ESurveyForm3');
    var recog = AutoForm.getFieldValue('rewrecog','ESurveyForm3');

    Router.go('rateEmployer4');

    }
    });


Template.empFourth.events({
  'submit form': function(event){

    event.preventDefault();

    //4th group
    var poor = AutoForm.getFieldValue('poor_perfs','ESurveyForm4');
    var flex = AutoForm.getFieldValue('flex','ESurveyForm4');
    var perf = AutoForm.getFieldValue('rew_perf','ESurveyForm4');

    Router.go('rateEmployer4');

    
         

          /*
          

          

          



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
                Bert.alert('Ratings added','success');
              }

          /*   
          Meteor.call('checkSurveyDate', 'employer', function(err, editable){
          if (err)
          {
            console.log(err);
          }
          else
          {
            if (editable)
            {
              //allow
              Meteor.call('update_Emp_Survey', currentSurvey, survey);

              if(user)
              {
                Meteor.call('update_userSurvey', currentSurvey, 'employer');
                Bert.alert('Ratings added','success');
              }

            }
            else
            {
              Session.set('allow_emp_survey', false);
              Bert.alert('too soon');
            }
          }
        });
        */



          //if(!user)
          //{
            //Router.go("/success");
          //}

          }
    });



Template.rateEmployer.events({
  'click #matchButton':function(event){
    event.preventDefault();

    Router.go('/match');
  }
});

Template.rateEmployer.helpers({
  'surveyCheck': function()
  {
    return Session.get('Survey');
  }
});

Template.rateDashboard.helpers({
  email: function() {
    return Meteor.user().emails[0].address;
  }

});

Template.rateEmployer.helpers({
  allowSurvey: function(){
    return Session.get('allow_emp_survey');
  }
});
