import { render } from 'react-dom';
import React from 'react';
import { DDP } from 'meteor/ddp-client';

// const serviceConnection = DDP.connect('http://localhost:4000');
const authConnection = DDP.connect('http://localhost:3000');

const AppComponent = () => {
  const fetchDemo = () => {
    // serviceConnection.call('services.test', (error, result) => { console.log("!!!", result, " or error ", error) });
  }
  const createUser = () => {
    authConnection.call('authorization:createUser', (error, result) => { console.log("!!!", result, " or error ", error) });
  }
  const getUsers = () => {
    authConnection.call('users:findAll', (error, result) => { console.log("!!!", result, " or error ", error) });
  }
  const login = () => {
    authConnection.call('authorization:validateUserAndLogin', {
      username: "minhlee",
      password: "123456",
    }, (error, result) => { console.log("!!!", result, " or error ", error) });
  }
  const checkLoggedIn = () => {
    authConnection.call('authorization:isLoggedIn', (error, result) => { console.log("!!!", result, " or error ", error) });
  }
  const logout = () => {
    AccountsClient.logout()
  }

  return (
    <div>
      I am Taskers!
      <button onClick={fetchDemo}>Test fetching another server</button>
      <button onClick={createUser}>Sign up</button>
      <button onClick={getUsers}>Get list uesrs</button>
      <button onClick={login}>Sign in</button>
      <button onClick={checkLoggedIn}>Check logged in ?</button>
      <button onClick={logout}>Log out</button>
    </div>
  )
}

Meteor.startup(() => {
  render(<AppComponent />, document.getElementById('react-root'));
});
