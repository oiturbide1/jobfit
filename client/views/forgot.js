// Ensure we have the token to pass into the template when it's present
if (Accounts._resetPasswordToken) {  
  Session.set('resetPasswordToken', Accounts._resetPasswordToken);
}

Template.forgot.helpers({  
  resetPassword: function() {
    return Session.get('resetPasswordToken');
  }
});

Template.forgot.events({  
  'click #forgotButton': function(event, template) {

  	event.preventDefault();

    var email = $('[name=userEmail]').val(),
      message;

     var options = {};
     if (email)
     {
     	options.email = email;
     }
     else
     {
     	message = 'Please enter a valid email address.'
     	Bert.alert(message);
     }

    
     Accounts.forgotPassword(options, function(error){
     	if (error)
     	{
     		Bert.alert(error);
     	}
     	else
     	{
     		message = 'Sent a reset password link to ' + email + '.';
     		Bert.alert(message,'success');
     	}
     });
      
    

    return false;
  },

  'click #resetButton': function (event, template) {

  	event.preventDefault();

    // Proper decoupled validation would be much nicer than this
    var password = template.find('#new_password').value
      //passwordTest = new RegExp("(?=.{6,}).*", "g");

    // If the password is valid, we can reset it.
    if (password) 
    {
      Accounts.resetPassword(
        Session.get('resetPasswordToken'),
        password,
        function (error) {
          if (err) {
            template.find('#form-messages').html('There was a problem resetting your password.');
          } else {
            // Get rid of the token so the forms render properly when they come back.
            Session.set('resetPasswordToken', null);
          }
        });
      
    } 
    else {
      // Looks like they blew it
      template.find('#form-messages').html('Your password is too weak!');
    }

    return false;
  }
});