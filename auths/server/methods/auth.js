Meteor.methods({
  'authorization:validateUserAndLogin'({ username, password, }) {
    const user = Accounts._findUserByQuery({ username });

    Accounts._checkPassword(user, password);

    return Accounts._attemptLogin(this, 'login', '', {
      type: '2FALogin',
      userId: user._id,
    });
  },
  "authorization:createUser"() {
    Accounts.createUser({
      username: "minhlee",
      email: "minhlee@gmail.com",
      password: "123456",
    });
  },
  "users:findAll"() {
    return Meteor.users.find().fetch();
  },
});