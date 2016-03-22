
 Template.registerTalent.events({
        'submit form': function(event) {

          event.preventDefault();

          var emailVar = event.target.registerEmail.value;
          var passwordVar = event.target.registerPassword.value;


          Accounts.createUser({
            email: emailVar,
            password: passwordVar
          });

          var currentUserId = Meteor.userId;
          var userId = Meteor.userId();

          Roles.addUsersToRoles(userId,'talent');



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
    });

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
              email: true
            }
          },

          messages:
          {
              loginEmail:
              {
                email: "You've entered an invalid email address."
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
                minlength: "Your password must be at least {0} characters.",
                valid: 'Password must contain at least one numeric and one alphabetic character.'
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


/*
Template.employerInfo.events({
  "submit form": function (event, template) {
      // Prevent default browser form submit
      event.preventDefault();

      // Get value from form element
      var company = event.target.companyName.value;
      var remote = event.target.remote.value;
      var street= event.target.address.value;
      var city= event.target.city.value;
      var state = event.target.state.value;
      var zipcode = event.target.zip.value;
      var user = Meteor.userId;


      // Add current employer info to profile
      //Meteor.users.update(
        //{_id: Meteor.userId()}, {$set: {"profile.currentEmployer": [company,street,city,state,zipcode]} }
      //);


      

      console.log('company info');
      console.log(remote);
      console.log(city);


    }


});
*/



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


Template.reason.events({
  "submit form": function (event, template) {
      // Prevent default browser form submit
      event.preventDefault();

      // Get value from form element
      var test = event.target.choice.value;
      var s= event.target.yes_reasons.value;
     


      // Add job info to profile
      //Meteor.users.update(
        //{_id: Meteor.userId()}, {$set: {"profile.jobInfo": [title,pDate,sDate,pTimes]} }
      //);


      // Clear form
      


      console.log();
      console.log(test);
      console.log(s);


  

    }

  });


