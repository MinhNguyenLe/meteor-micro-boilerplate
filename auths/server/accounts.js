Accounts.config({ loginExpirationInDays: 10 });

Accounts.validateNewUser((user) => {
  console.log("validateNewUser ", user)
  return true;
});
Accounts.validateLoginAttempt((options) => {
  console.log("validateLoginAttempt ", options);

  if (options.type === 'resume') {
    return true;
  }

  if (options.methodName === 'resetPassword') {
    return false;
  }
  if (options.type === 'password' && info.methodName !== 'resetPassword') {
    return false;
  }

  if (options.type === '2FALogin' && options.methodName === 'login') {
    return options.allowed;
  }

  return false;
});

Accounts.onLogin((event) => {
  console.log("check onLogin", event)
});