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
    var userType;

    comp =
    {
      'companyName': company,
      'address': address,
      'city': city,
      'state': state,
      'zip': zip
    }

    if (Roles.userIsInRole(Meteor.userId(), 'Rep'))
    {
      userType = 'Rep';
    }
    else if (Roles.userIsInRole(Meteor.userId(), 'Talent'))
    {
      userType = 'Talent';
    }

    else
    {
      userType = 'Anon';
    }

    /*
    could fix this section with collection hooks
    or functions


    */
    try
    {

      var compcheck = Company.findOne({'companyName': company});

    }

    catch(error)
    {
      console.log(error);
    }

    //check if company exists already
    //if exists, create survey and add existing company to survey
    if (compcheck)
    {

      Session.set('existing_company',compcheck._id);

      if (current == 'true')
      {
        var current_former = 1;
        Session.set('current_or_former', current_former);

        Meteor.call('insert_survey', compcheck._id, remote, current_former, userType, function(error, insertedSurvey)
        {
          if (error)
          {
            console.log(error);
          }
          else
          {
            Session.set('Survey', insertedSurvey);

          }

        });

      }

      else if(current == 'false')
      {
        var current_former = 0;
        Session.set('current_or_former', current_former);

        Meteor.call('insert_survey', compcheck._id, remote, current_former, userType, function(error, insertedSurvey)
        {
          if (error)
          {
            console.log(error);
          }
          else
          {
            Session.set('Survey', insertedSurvey);

          }

        });


      }


    }

    //if doesnt exist, insert company and create survey
    else
    {

      Meteor.call('insert_company', comp, function(error, insertedCompany)
      {
          if (error)
          {
            console.log(error);
          }
          else
          {
            Session.set('current_comp', insertedCompany);

            //check whether it is a current or former employer
            // and sets Session
            if (current == 'true')
            {
              var current_former = 1;
              Session.set('current_or_former', current_former);

              Meteor.call('insert_survey', insertedCompany, remote, current_former, userType, function(error, insertedSurvey)
              {
                if (error)
                {
                  console.log(error);
                }
                else
                {
                  Session.set('Survey', insertedSurvey);

                }

              });

            }


            else if(current == 'false')
            {
              var current_former = 0;
              Session.set('current_or_former', current_former);

              Meteor.call('insert_survey', insertedCompany, remote, current_former, userType, function(error, insertedSurvey)
              {
                if (error)
                {
                  console.log(error);
                }
                else
                {
                  Session.set('Survey', insertedSurvey);

                }

              });


            }


          }

      });
    }



    var role_check = Roles.userIsInRole(Meteor.userId(), 'Rep');
    if (role_check)
    {
      Router.go('/rateEmployer');
    }


    if(!Meteor.userId()){
      Router.go('/rateEmployer');
    }


  }
});



Template.Emp.helpers({
  isFormer: function(curr_or_form) {
    var formerCheck = Session.get('current_or_former')
    if (formerCheck == 0){
      var former = true;
    }
    else{
      var former = false;
    }
    return former;

  }
});


Template.employerInfo.onRendered(function(){
        $('#currentCompanyForm').validate(

        {
          rules:
          {
            companyName:
            {
              required: true,
              valid: false
            },
            address:
            {
              required: true,
              valid: false
            },

            city:
            {
              required: true,
              valid: false
            },

            state:
            {
              required: true,
              valid: false
            },

            zip:
            {
              required: true,
              zipcodeUS: true,
              valid: false
              //maxlength: 5
            },

            gender:
            {
              valid: false
            },

            curr_or_form:
            {
              required: true,
              valid: false
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
              required: 'Please enter zip',
              zipcodeUS: 'Zip code must be of format XXXXX'
            },

            curr_or_form:
            {
              required: 'Must enter former or current'
            }

          }

          });

      });

jQuery.validator.addMethod("zipcodeUS", function(value, element) {
  return this.optional(element) || /\d{5}-\d{4}$|^\d{5}$/.test(value);
}, "The specified US ZIP Code is invalid");





Template.jobInfo.events({
  "submit form": function (event, template) {
      // Prevent default browser form submit
      event.preventDefault();

      // Get value from form element
      var p1= AutoForm.getFieldValue('promo_date.0','jobInfoForm');
      var p2= AutoForm.getFieldValue('promo_date.1','jobInfoForm');
      var p3= AutoForm.getFieldValue('promo_date.2','jobInfoForm');
      var p4= AutoForm.getFieldValue('promo_date.3','jobInfoForm');
      var p5= AutoForm.getFieldValue('promo_date.4','jobInfoForm');
      var title = event.target.title.value;
      var sDate= event.target.start_date.value;
      var promo = event.target.promoted.value;

      var promoDates = [p1,p2,p3,p4,p5];


      var sur = Session.get('Survey');
      var info = [title, sDate, promo, promoDates]


      Meteor.call('add_job_info', sur, info);


      // Clear form




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

      var sur = Session.get('Survey');
      var status_info = [status, hrs, other];


      //Add job info to survey
      Meteor.call('add_job_status', sur, status_info);

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


      feelings = {
        "job_satisfaction": job_sat,
        'performance': per,
        'career': career,
        'leaving': leave,
        'values': values,
        'cooperate': coop,
        'assist':assist,
        'actions':actions
      }


      var sur = Session.get('Survey');

      Meteor.call('add_job_feelings', sur, feelings);


      Router.go('/rateEmployer');

    }


});


Template.reasons_left.events({
  "submit form": function (event, template) {
      // Prevent default browser form submit
      event.preventDefault();

      // Get value from form element
      var choice = event.target.choice.value;
      var yes = AutoForm.getFieldValue('yes_reasons','reasonsForm');
      var no = AutoForm.getFieldValue('no_reasons','reasonsForm');

      var sur = Session.get('Survey');


      if (yes)
        Meteor.call('add_reasons_left', sur, choice, yes);

      if(no)
        Meteor.call('add_reasons_left', sur, choice, no);


      // Clear form


      Router.go('/rateEmployer');


    }


});

Template.empDashboard.helpers({
  email: function() {
    return Meteor.user().emails[0].address;
  }

});

Template.empDashboard.events({
    'click .logout': function(event){
        event.preventDefault();
        Meteor.logout();
        Router.go('home');
    }
});
