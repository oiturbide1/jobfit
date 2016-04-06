Template.registerTalent.events({
        'submit form': function(event) {

          event.preventDefault();

          var emailVar = event.target.registerEmail.value;
          var passwordVar = event.target.registerPassword.value;


          Accounts.createUser({
            email: emailVar,
            password: passwordVar
          }, function(error){
            if(error){
                alert(error.reason);
            } else {
                Router.go("/information");
                //var currentUserId = Meteor.userId;
                var userId = Meteor.userId();
                Roles.addUsersToRoles(userId,'talent');
                console.log('submitted');

            }

          });



        }
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
                    minlength: 8,
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
              minlength: 8
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
$.validator.addMethod('valid', function(value, element)
    {
        return this.optional(element) || (value.match(/[a-zA-Z]/) && value.match(/[0-9]/));
    });

/*
$.validator.addMethod('zipcode', function(value, element)
    {
        return this.optional(element) || /^\d{5}(?:-\d{4})?$/.test(value);
    }, 'Invalid zipcode');

*/

Template.login.events({
        'submit form': function(event) {

          event.preventDefault();

        }


      });

Template.login.onRendered(function(){
    var validator = $('#login').validate(

      {
          submitHandler: function(event)
          {

            var loginEmail = event.target.loginEmail.value;
            var loginPassword = event.target.loginPassword.value;


            Meteor.loginWithPassword(loginEmail, loginPassword, function(err){
              if(err)
              {
                //alert(err.reason);
                if(err.reason == "User not found")
                {
                    validator.showErrors({
                    loginEmail: 'No existing user'
                    });
                }

                if(err.reason == "Incorrect password"){
                    validator.showErrors({
                    loginPassword: err.reason
                    });
                }

              }
              else
              {
                Router.go("/information");
              }

          });
          },


          rules:
          {
            loginEmail:
            {
              email: true,
              required: true
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
                email: "You've entered an invalid email address.",
                required: 'Email is required'
              },
              loginPassword:
              {
                required: "Password empty"

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
