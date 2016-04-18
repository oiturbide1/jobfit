Template.talentRegistration.events({
        'submit form': function(event) {

          event.preventDefault();

        }
      });


Template.talentRegistration.onRendered(function(){
              var validator = $('.registration').validate({
                  submitHandler: function(event)
                  {
                    var email = $('[name=regEmail]').val();
                    var password = $('[name=regPassword]').val();
                    var usertype = $('input[name=userType]:checked').val();


                    if (usertype == 'Talent')
                    {
                      Accounts.createUser({
                        email: email,
                        password: password
                      }, function(error)
                      {
                        if(error){
                          console.log(error);
                          if(error.reason == '"Email already exists."'){
                            validator.showErrors({
                              email: 'That email is already in the system'
                            });
                          }

                        }
                        else
                        {
                            Router.go("/information");
                            //var currentUserId = Meteor.userId;
                            var userId = Meteor.userId();
                            Roles.addUsersToRoles(userId,'talent');
                        }

                      });

                    }

                    else if (usertype == 'Rep')
                    {
                      Accounts.createUser({
                        email: email,
                        password: password
                      }, function(error)
                      {
                        if(error){
                          console.log(error);
                          if(error.reason == '"Email already exists."'){
                            validator.showErrors({
                              email: 'That email is already in the system'
                            });
                          }

                        }
                        else
                        {
                            Router.go("/Emp");
                            //var currentUserId = Meteor.userId;
                            var userId = Meteor.userId();
                            Roles.addUsersToRoles(userId,'rep');
                        }

                      });
                    }





                  }

              });
            });



// validation rules and messages
$.validator.setDefaults({
    rules: {
            regEmail:
            {
              required: true,
              email: true,
              valid: false
            },

            regPassword:
            {
              required: true,
              minlength: 8,
              valid: true
            },

            matchedpassword:
            {
              required: true,
              equalTo: '#reg_password',
              valid: true
            },

            loginPassword:
            {
              required: true,
              valid: true
            },

            loginEmail:
            {
              required: true,
              email: true,
              valid: false
            }


              },

            messages:
            {
              regEmail:
              {
                required: "You must enter an email address.",
                email: "You've entered invalid email address."
              },

              regPassword:
              {
                required: "You must enter a password.",
                minlength: "Your password must be at least {0} characters.",
                valid: 'Password must contain at least 1 number and 1 letter'
              },

              matchedpassword:
              {
                required: "You must enter matching password",
                equalTo: "Passwords do not match"

              },

              loginEmail:
              {
                required: "You need to enter your email address"
              },

              loginPassword:
              {
                required: "You need to enter your password."
              }

            },

            tooltip_options:
            {
              loginEmail:
              {
                trigger: "click",
                placement: 'bottom',
                html: true
              },
              loginPassword:
              {
                trigger: "hover",
                placement: 'left'
              },

            }
});



//function to check password for criteria of at least 1 number and 1 alphabet
jQuery.validator.addMethod('valid', function(value, element)
    {
        return this.optional(element) || (value.match(/[a-zA-Z]/) && value.match(/[0-9]/));
    }, "The password is invalid" );



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

            var loginEmail = $('[name=loginEmail]').val();
            var loginPassword = $('[name=loginPassword]').val();


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
          }


      });
    });



Template.home.onRendered(function()
{
   $('[data-toggle="tooltip"]').tooltip() //initialize all tooltips in this template
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

Template.dashboard.helpers({
  email: function() {
    return Meteor.user().emails[0].address;
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
