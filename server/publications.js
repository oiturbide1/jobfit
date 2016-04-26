//need to make an isAdmin function

function isAdmin()
{
	Meteor.call('isAdmin');
	 //console.log(role);
	 /*
	 if (role = "admin")
	 {
	 	var f = 'true';
	 	return true;
	 }

	 return false;
	 var f = 'false';
	 console.log(f);
	 */

}


//isAdmin();
//onsole.log(Meteor.userId());






Meteor.publish('users', function()
{
    var currentUserId = this.userId;
    if(isAdmin(currentUserId)){
        return Meteor.users.find();
    }else{
      return Meteor.users.find({'_id': currentUserId});
    }
});


Meteor.publish('personal_surveys', function()
{
    var currentUserId = this.userId;
    if(currentUserId){
      return PersonalSurvey.find();
  	}

});

Meteor.publish('employer_surveys', function()
{
    var currentUserId = this.userId;
    if(currentUserId){
      return EmployerSurvey.find();
  	}

});

Meteor.publish('roles', function()
{
    var currentUserId = this.userId;
    if(Roles.userIsInRole(currentUserId, 'talent')){
      return Meteor.talent.find();
  	}

});
