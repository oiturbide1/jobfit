
Template.empFirst.events({
        'submit form': function(event) {


          event.preventDefault();



          //1st group

          var wlb = AutoForm.getFieldValue('work_life_balance','ESurveyForm1');
          var sec = AutoForm.getFieldValue('job_security','ESurveyForm1');
          var dev = AutoForm.getFieldValue('development_opportunities','ESurveyForm1');
          var work = AutoForm.getFieldValue('workload','ESurveyForm1');
          var path = AutoForm.getFieldValue('career_path','ESurveyForm1');

          var first = {
            'work life balance':wlb,
            'job security':sec,
            'dev':dev,
            'work': work,
            'path': path
          };

          var un = [];
          for (i in first)
          {
            if(first[i] == undefined)
              un.push(i);
          }

          //console.log(un);
          //alert('you skipped ' + un.length + ' question(s)');
          //console.log()


          console.log(first);


          Session.set('first_added',first);
          Router.go('rateEmployer2');


          new Confirmation({
  message: "Are you sure this are the correct values? You will not be able to change once submitted.  You skipped " + un.length +  " question(s)",
  title: "Confirmation",
  cancelText: "Cancel",
  okText: "Ok",
  success: true, // whether the button should be green or red
  focus: "cancel" // which button to autofocus, "cancel" (default) or "ok", or "none"
}, function (ok) {
  // ok is true if the user clicked on "ok", false otherwise
});

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

    var second = {
      'promotion_criteria':criteria,
      'promotion_opportunities':opp,
      'freedom':freedom,
      'salary': salary,
      'good_sup': manage
    };


    var survey = Session.get('first_added');

    for (item in second)
    {
      survey[item] = second[item];
    }


    //object of object idea
    Session.set('second_added', survey);

    Router.go('rateEmployer3');

    }
    });


Template.empThird.events({
  'submit form': function(event){

    event.preventDefault();

    //3rd group
    var miss = AutoForm.getFieldValue('mission','ESurveyForm3');
    var health = AutoForm.getFieldValue('health','ESurveyForm3');
    var space = AutoForm.getFieldValue('workspace','ESurveyForm3');
    var flex = AutoForm.getFieldValue('flex','ESurveyForm3');
    var poor = AutoForm.getFieldValue('poor_perfs','ESurveyForm3');


    var third = {
      'mission':miss,
      'health':health,
      'workspace':space,
      'flex': flex,
      'poor_perfs': poor
    };

    var survey = Session.get('second_added');

    for (item in third)
    {
      survey[item] = third[item];
    }



    Session.set('third_added',survey);

    Router.go('rateEmployer4');

    }
    });


Template.empFourth.events({
  'submit form': function(event){

    event.preventDefault();

    //4th group
    var recog = AutoForm.getFieldValue('rewrecog','ESurveyForm4');
    var perf = AutoForm.getFieldValue('rew_perf','ESurveyForm4');

    var fourth = {
      'rewrecog':recog,
      'rew_perf':perf
    };

    var survey = Session.get('third_added');

    for (item in fourth)
    {
      survey[item] = fourth[item];
    }

    var survey_values = new Array();
    for (key in survey)
    {
      survey_values.push(survey[key]);
    }



    var user = Meteor.userId();
    var currentSurvey = Session.get('Survey');


    Meteor.call('update_Emp_Survey', currentSurvey, survey_values);

    if(user)
    {
      Meteor.call('update_userSurvey', currentSurvey, 'employer');
      Bert.alert('Ratings added','success');
    }





    //Router.go('rateEmployer4');









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



          if(!user)
          {
            Router.go("/success");
          }

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
  },

  //for check for potential editing
  //going back in browser and editing survey
  'survey_completed': function()
  {
    return Session.get('first_added');
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
