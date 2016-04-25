/*
var users = [
      {email:"me@example.com",roles:['manage-users']},
      {email:"admin@a.com",roles:['admin']}
    ];

_.each(users, function (user) {
  var id;

  id = Accounts.createUser({
    email: user.email,
    password: "1234567a"
  });

  if (user.roles.length > 0) {
    // Need _id of existing user record so this call must come
    // after `Accounts.createUser` or `Accounts.onCreate`
    Roles.addUsersToRoles(id, 'admin');
  }

});
*/

