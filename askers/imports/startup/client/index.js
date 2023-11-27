import { render } from 'react-dom';
import React from 'react';
import App from "/imports/ui/App";

import { AccountsClient } from 'meteor/accounts-base'

Accounts = new AccountsClient({ ddpUrl: "http://localhost:3000" });

Meteor.startup(() => {
  render(<App />, document.getElementById('react-root'));
});
