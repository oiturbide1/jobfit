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

    
    Company.insert(comp, function(err,docsInserted)
    {
      console.log(docsInserted);
      Session.set('current_comp', docsInserted);
    
    });

    


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
 

    Router.go('/rateEmployer');

  }
});


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
              maxlength: 5,
              zipcode: true
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
        {_id: Meteor.userId()}, {$set: {
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
      


      console.log('job info');
      console.log(other);


  

    }


});

Template.jobFeeling.events({
  "submit form": function (event, template) {
      // Prevent default browser form submit
      event.preventDefault();

      // Get value from form element
      var per = AutoForm.getFieldValue('performance','feelingsForm');
      var values= AutoForm.getFieldValue('values','feelingsForm');
      
      /*
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
      */


      // Clear form
      


      console.log(per);
      console.log(values);


  

    }


});