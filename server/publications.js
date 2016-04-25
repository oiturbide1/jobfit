//need to make an isAdmin function 
Meteor.publish('users', function() {
    var currentUserId = this.userId;
    if(isAdmin(currentUserId)){
        return Meteor.users.find();
    }else{
      return Meteor.users.find({'_id': currentUserId});
    }
});
