Template.employerInfo.events({
  "submit form": function(event, template)
  {
    event.preventDefault();

    var company = event.target.companyName.value;
    var address = event.target.address.value;
    var city = event.target.city.value;
    var remote = event.target.remote.value;
    var state = event.target.state.value;
    var zip = event.target.zip.value;
    var current = event.target.curr_or_form.value;

    comp =
    {
      'companyName': company,
      'address': address,
      'city': city,
      'state': state,
      'zip': zip
    }

    
    Meteor.call('insert_company', comp, function(error, result)
    {
        Session.set('current_comp', result);
        //console.log(result);

    });
  

    var u = Session.get('current_comp');
    console.log(u);





    //check whether works remote or not
    // and sets Session
    if(remote == 'false')
    {
      remot = 'not remotely';
    }
    else if(remote == 'true')
    {
      remot = 'work remotely';
    }

    Session.set('rem', remot);
    


    //check whether it is a current or former employer
    // and sets Session
    if(current == 'true')
    {
      var current_former = 'current'
    }
    else if (current == 'false'){
      var current_former = 'former'
    }
    Session.set('current_former', current_former);


    if(!Meteor.userId()){
      Router.go('/rateEmployer');
    }
    

  }
});



Template.Emp.helpers({  
  isFormer: function(curr_or_form) {
    var formerCheck = Session.get('current_former')
    if (formerCheck == 'former'){
      var former = true;
    }
    else{
      var former = false;
    }
    return former;
    
  }
});

/*
Template.employerInfo.onRendered(function(){
        $('#currentCompanyForm').validate(

        {
          rules:
          {
            companyName:
            {
              required: true
            },
            address:
            {
              required: true
            },

            city:
            {
              required: true
            },

            state:
            {
              required: true
            },

            zip:
            {
              required: true,
              maxlength: 5
            },

            curr_or_form:
            {
              required: true
            }


          },

          messages:
          {
            companyName:
            {
              required: "No company provided"
            },

            address:
            {
              required: "Address required"
            },

            city:
            {
              required: "City required"
            },

            state:
            {
              required: 'State required'
            },

            zip:
            {
              required: 'Please enter zip'
            },

            curr_or_form:
            {
              required: 'Must enter former or current'
            }

          }

          });

      });


*/


Template.jobInfo.events({
  "submit form": function (event, template) {
      // Prevent default browser form submit
      event.preventDefault();

      // Get value from form element
      var pDate= AutoForm.getFieldValue('promo_date.0','jobInfoForm');
      var title = event.target.title.value;
      var sDate= event.target.start_date.value;
      var promo = event.target.promoted.value;
      var user = Meteor.userId;


      //Add job info to profile
      Meteor.users.update(
        {_id: Meteor.userId()}, {$push: {
          "profile.job_info.title": title,
          "profile.job_info.start_date": sDate,
          'profile.job_info.promoted': promo,
          'profile.job_info.promo_date':[pDate]
          } }
      );


      // Clear form



      console.log('job info');
      console.log(promo);
      console.log(sDate);
      




    }


});

Template.empStatus.events({
  "submit form": function (event, template) {
      // Prevent default browser form submit
      event.preventDefault();

      // Get value from form element
      var status = event.target.status.value;
      var hrs= event.target.hours.value;

      if (AutoForm.getFieldValue('other','statusForm'))
      {
        var other = event.target.other.value;
      }
      var user = Meteor.userId;


      //Add job info to profile
      Meteor.users.update(
        {_id: Meteor.userId()}, {$set: {
          "profile.status.status": status,
          "profile.status.hours": hrs,
          'profile.status.other': other
          } }
      );


      // Clear form


    }


});

Template.jobFeeling.events({
  "submit form": function (event, template) {
      // Prevent default browser form submit
      event.preventDefault();

      // Get value from form element
      var per = AutoForm.getFieldValue('performance','feelingsForm');
      var values= AutoForm.getFieldValue('values','feelingsForm');
      var job_sat= AutoForm.getFieldValue('job_satisfaction','feelingsForm');
      var career= AutoForm.getFieldValue('career','feelingsForm');
      var leave= AutoForm.getFieldValue('leaving','feelingsForm');
      var coop= AutoForm.getFieldValue('cooperate','feelingsForm');
      var assist= AutoForm.getFieldValue('assist','feelingsForm');
      var actions= AutoForm.getFieldValue('actions','feelingsForm');

      
      var user = Meteor.userId;


      //Add job info to profile
      Meteor.users.update(
        {_id: Meteor.userId()}, {$set: {
          "profile.job_feelings.job_satisfaction": job_sat,
          'profile.job_feelings.performance': per,
          'profile.job_feelings.career': career,
          'profile.job_feelings.leaving': leave,
          'profile.job_feelings.values': values,
          'profile.job_feelings.cooperate': coop,
          'profile.job_feelings.assist':assist,
          'profile.job_feelings.actions':actions
          } }
      );
      
      

      // Clear form



      Router.go('/rateEmployer');




    }


});


Template.reasons_left.events({
  "submit form": function (event, template) {
      // Prevent default browser form submit
      event.preventDefault();

      // Get value from form element
      var choice = event.target.choice.value;
      var yes = event.target.yes_reasons.value;
      

      console.log(choice);
      console.log(yes);
      
      var user = Meteor.userId;


      //FormerEmployerSurvey.update(survey, function(err,docsInserted)

      /*
      //Add job info to profile
      FormerEmployer.update(
        {_id: Meteor.userId()}, {$set: {
          "profile.job_feelings.job_satisfaction": job_sat,
          'profile.job_feelings.performance': per,
          'profile.job_feelings.career': career,
          'profile.job_feelings.leaving': leave,
          'profile.job_feelings.values': values,
          'profile.job_feelings.cooperate': coop,
          'profile.job_feelings.assist':assist,
          'profile.job_feelings.actions':actions
          } }
      );
      
      

      // Clear form


      */
      Router.go('/rateEmployer');
      




    }


});
