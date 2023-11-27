import "./methods/auth";

// Accounts.onLogin(e => console.log("onLogin asker ", e));
// Accounts.validateLoginAttempt((options) => {
//   console.log("validateLoginAttempt asker ", options);
//   if (options.type === 'resume') {
//     return true;
//   }

//   if (options.methodName === 'resetPassword') {
//     return false;
//   }
//   if (options.type === 'password' && info.methodName !== 'resetPassword') {
//     return false;
//   }

//   if (options.type === '2FALogin' && options.methodName === 'login') {
//     return options.allowed;
//   }

//   return false;
// });
// Accounts.registerLoginHandler('two-factor-login', (options) => {
//   console.log("test registration login ", options)

//   return { userId: "123" }
//   // return undefined;
// });

Meteor.startup(() => { });