
 Template.registerTalent.events({
        'submit form': function(event) {

          event.preventDefault();

          var emailVar = event.target.registerEmail.value;
          var passwordVar = event.target.registerPassword.value;


          Accounts.createUser({
            email: emailVar,
            password: passwordVar,
            profile: { role: "talent" }
          });

          Router.go("/information");
          console.log('submitted');


        }
      });

/*
$.validator.setDefaults({
    rules: {
            registerEmail:
            {
              required: true,
              email: true
            },

            registerPassword:
            {
              required: true,
              minlength: 8,
              //number: true
            },

            matchedPassword:
            {
              required: true,
              equalTo: registerPassword
            },

            loginPassword:
            {
              required: true
            },

            loginEmail:
            {
              required: true,
              email: true
            }


              },

            messages:
            {
              registerEmail:
              {
                required: "You must enter an email address.",
                email: "You've entered an invalid email address."
              },

              registerPassword:
              {
                required: "You must enter a password.",
                minlength: "Your password must be at least {0} characters."
              },

              matchedPassword:
              {
                required: "You must enter matching password",
                equalTo: "Passwords do not match"

              },

              loginEmail:
              {
                required: "You need to enter your email address."
              },

              loginPassword:
              {
                required: "You need to enter your password."
              }

            }
});

*/

//function to check password for criteria of at least 1 number and 1 alphabet
$.validator.addMethod('valid', function(value, element) {
        return this.optional(element) || (value.match(/[a-zA-Z]/) && value.match(/[0-9]/));
    },
    'Password must contain at least one numeric and one alphabetic character.');

Template.login.events({
        'submit form': function(event) {

          event.preventDefault();


          var emailVar = event.target.loginEmail.value;
          var passwordVar = event.target.loginPassword.value;

          Meteor.loginWithPassword(emailVar, passwordVar, function(err){
            if(err)
            {
                Session.set('alert','login failed!');
                return false;
                console.log('error');
            }
            else
            {
                Session.set('alert',null);
                Router.go("/information");
                console.log('correct');
            }

          });




          //user =
            //email: $('[name="loginEmail"]').val()
            //password: $('[name="loginPassword"]').val()


          //Meteor.loginWithPassword(user.email, user.password, (error)->
            //alert error.reason if error



          //var user = Meteor.userId().email;
          //console.log(user)
        }
      });

Template.login.onRendered(function(){
    $('#login').validate(

      {
          rules:
          {
            loginEmail:
            {
              required: true,
              email: true
            },

            loginPassword:
            {
              required: true
            }
          },

          messages:
          {
              loginEmail:
              {
                required: "You must enter an email address.",
                email: "You've entered an invalid email address."
              },

              loginPassword:
              {
                required: "Please enter your password.",
              }
          }

      });
    });


Template.registerTalent.onRendered(function(){
        $('#registerT').validate(

        {
          rules: {
            registerEmail:
            {
              required: true,
              email: true
            },

            registerPassword:
            {
              required: true,
              minlength: 10,
              valid: true
            },

            matchedPassword:
            {
              required: true,
              equalTo: registerPassword
            }


              },

            messages:
            {
              registerEmail:
              {
                required: "You must enter an email address.",
                email: "You've entered an invalid email address."
              },

              registerPassword:
              {
                required: "You must enter a password.",
                minlength: "Your password must be at least {0} characters."
              },

              matchedPassword:
              {
                required: "You must enter matching password",
                equalTo: "Passwords do not match"

              }

            }
          });

      });


Template.registerRep.events({
        'submit form': function(event) {

          event.preventDefault();

          var emailVar = event.target.registerEmail.value;
          var passwordVar = event.target.registerPassword.value;


          Accounts.createUser({
            email: emailVar,
            password: passwordVar,
            profile: { role: "rep" }
          });


          Router.go("/information");
          console.log('submittedR');


        }
      });
/*
Template.loginRep.events({
        'submit form': function(event) {

          event.preventDefault();

          var usernameVar = event.target.loginUsername.value;
          var passwordVar = event.target.loginPassword.value;

          Meteor.loginWithPassword(usernameVar, passwordVar);
          console.log('logged inR');

        }
      });

*/
Template.dashboard.events({
    'click .logout': function(event){
        event.preventDefault();
        Meteor.logout();
    }
});




Template.home.events({
  "click #loginButton": function (event, template) {
          // Prevent default browser form submit
          event.preventDefault();

          Router.go("/login");
          console.log('clicked login')

        }

      });




Template.pi.events({
  "submit form": function (event) {
      // Prevent default browser form submit
      event.preventDefault();

      // Get value from form element
      var email = event.target.email.value;
      var zipCode= event.target.zip.value;
      var currentUserId = Meteor.userId;
      var user = Meteor.users.findOne(Meteor.userId);


      // Insert a task into the collection
      Meteor.users.update(
        {_id: Meteor.userId()}, {$set: {"profile.address": [email,zipCode]} }
      );


      // Clear form
      event.target.email.value = "";
      event.target.zip.value = '';

      console.log('updated');
    }

});

Template.user.helpers({
  email: function() {
    return Meteor.user().emails[0].address;
  }
});

Template.educ.events({
  "submit form": function (event, template) {
      // Prevent default browser form submit
      event.preventDefault();

      // Get value from form element
      var school = event.target.school.value;
      var degree= event.target.degree.value;
      var subject= event.target.subject.value;
      var user = Meteor.userId;


      // Add education info to profile
      Meteor.users.update(
        {_id: Meteor.userId()}, {$set: {"profile.education": [school,degree,subject]} }
      );


      // Clear form
      event.target.school.value = "";
      event.target.degree.value = '';
      event.target.subject.value = '';

      console.log('school');
      console.log('test');

      var selected = template.findAll( "input[type=checkbox]:checked");

      var array = selected.map(function(item)
      { return item.value})


      console.log(array);

    }


});



Template.skills.events({
  "submit form": function (event, template) {
      // Prevent default browser form submit
      event.preventDefault();

      // Get value from form element
      var skill1 = event.target.skill1.value;
      var skill2= event.target.skill2.value;
      var skill3= event.target.skill3.value;
      var skill4 = event.target.skill4.value;
      var skill5 = event.target.skill5.value;

      console.log(skill2)

      var user = Meteor.userId;


      // Add skill info to profile
      Meteor.users.update(
        {_id: Meteor.userId()}, {$set: {"profile.skills": [skill1,skill2,skill3,skill4,skill5]} }
      );



    }


});



Template.occupationInfo.events({
  "submit form": function (event, template) {
      // Prevent default browser form submit
      event.preventDefault();

      // Get value from form element
      var industry = event.target.industry.value;
      var occupation= event.target.occupation.value;
      var jobLevel= event.target.jobLevel.value;

      var user = Meteor.userId;


      // Add occupation info to profile
      Meteor.users.update(
        {_id: Meteor.userId()}, {$set: {"profile.occupation": [industry,occupation,jobLevel,]} }
      );




      // Clear form
      event.target.industry.value = "";
      event.target.occupation.value = '';
      event.target.jobLevel.value = '';


      console.log(occupation);



    }


});



Template.employerInfo.events({
  "submit form": function (event, template) {
      // Prevent default browser form submit
      event.preventDefault();

      // Get value from form element
      var company = event.target.companyName.value;
      var street= event.target.street.value;
      var city= event.target.city.value;
      var state = event.target.state.value;
      var zipcode = event.target.zip.value;
      var user = Meteor.userId;


      // Add current employer info to profile
      Meteor.users.update(
        {_id: Meteor.userId()}, {$set: {"profile.currentEmployer": [company,street,city,state,zipcode]} }
      );


      // Clear form
      event.target.companyName.value = "";
      event.target.street.value = '';
      event.target.city.value = '';
      event.target.state.value = '';
      event.target.zip.value = '';

      console.log('company info');


      var selected = template.findAll( "input[type=checkbox]:checked");

      var array = selected.map(function(item)
      { return item.value})


      console.log(array);

    }


});


Template.jobInfo.events({
  "submit form": function (event, template) {
      // Prevent default browser form submit
      event.preventDefault();

      // Get value from form element
      var title = event.target.jobtitle.value;
      var pDate= event.target.promotiondate.value;
      var sDate= event.target.startdate.value;
      var pTimes = event.target.timespromoted.value;
      var user = Meteor.userId;


      // Add job info to profile
      Meteor.users.update(
        {_id: Meteor.userId()}, {$set: {"profile.jobInfo": [title,pDate,sDate,pTimes]} }
      );


      // Clear form
      event.target.jobtitle.value = "";
      event.target.promotiondate.value = '';
      event.target.startdate.value = '';
      event.target.timespromoted.value = '';


      console.log('job info');


      var selected = template.findAll( "input[type=checkbox]:checked");

      var array = selected.map(function(item)
      { return item.value})


      console.log(array);

    }


});

/*
// first, remove configuration entry in case service is already configured
Accounts.loginServiceConfiguration.remove({
  service: "google"
});

Accounts.loginServiceConfiguration.insert({
  service: "google",
  clientId: "1046984722241-buu74qqfs42dvrimo004vlllropr6hlu.apps.googleusercontent.com",
  secret: "z_xtCwnsiRIErRR3YGDGM0i1"
});



Template.google.events({
  "click button": function (event, template) {

      console.log('clicked google login')






    }


});
*/



function addElement(parentId, elementTag, elementId, html) {
    // Adds an element to the document
    var p = document.getElementById(parentId);
    var newElement = document.createElement(elementTag);
    newElement.setAttribute('id', elementId);
    newElement.innerHTML = html;
    p.appendChild(newElement);
}

function removeElement(elementId) {
    // Removes an element from the document
    var element = document.getElementById(elementId);
    element.parentNode.removeChild(element);
}

var fileId = 0; // used by the addFile() function to keep track of IDs
function addFile() {
    fileId++; // increment fileId to get a unique ID for the new element
    var html = '<input type = "text" name = "skill[]"> '  +
               '<a href="" onclick="javascript:removeElement(\'file-\' + fileId + \'\'); return false;">Remove</a>';
    addElement('skillsList', 'p', 'file-' + fileId, html);
}


Template.skills.events({
  "click #addButton": function (event, template) {
      // Prevent default browser form submit
      event.preventDefault();


      addFile()


    }


});


Template.jobFeeling.events({
  "submit form": function (event, template) {
      // Prevent default browser form submit
      event.preventDefault();

      // Get value from form element
      var test = event.target.jobSatTest.value;

      var user = Meteor.userId;


      // Add current employer info to profile
      Meteor.users.update(
        {_id: Meteor.userId()}, {$set: {"profile.jobSatisfaction": [test]} }
      );


      console.log(test);

    }


});


Template.rateCurrentEmployerInfo.events({
  "submit form": function(event, template)
  {
    event.preventDefault();

    var company = event.target.companyName.value;
    var address = event.target.street.value;
    var city = event.target.city.value;
    var state = event.target.state.value;
    var zip = event.target.zip.value;

    console.log(state);

    //need to add logic for capturing data and inserting into companys in DB

    Router.go('/rateCEmployer');

  }
});


Template.rateFormerEmployerInfo.events({
  "submit form": function(event, template)
  {
    event.preventDefault();

    //need to add logic for capturing data and inserting into companys in DB

    Router.go('/rateFEmployer');

  }
});
