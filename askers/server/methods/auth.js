const authConnection = DDP.connect('http://localhost:3000');

Meteor.methods({
  async "authorization:validateUserAndLogin"({ username, password }) {
    const a = await authConnection.callAsync('authorization:validateUserAndLogin', {
      username,
      password,
    });
    console.log(a, "??")
    return a
  },
});