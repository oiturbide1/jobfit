Accounts.validateLoginAttempt(function(info){
    var user = info.user;
    if (!user)
        return false;

    var failAttempt = 0;
    if (user.profile)
        failAttempt = user.profile.login_attempts;

    var loginAllowed = false;
    if(info.error && info.error.error == 403){
        if(failAttempt >= 3) {
            console.log('Account locked!');
            throw new Meteor.Error(403, 'you need to contact the admin!');
        }
        // increment the fail attempts
        failAttempt++;
        console.log(failAttempt);
        loginAllowed = false;
    } else {
        // success login set to 0
        failAttempt = 0;
        loginAllowed = true;
    }

    Meteor.users.update({_id: user._id}, {$set: {'profile.login_attempts': failAttempt}});

    return loginAllowed;
});
