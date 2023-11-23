// @ts-nocheck
import React from "react";
import { DDP } from "meteor/ddp-client";
import { BaseTable, HelloWorld } from "btaskee-ui-be";
// import { HelloWorld } from "otorio-components";

// const serviceConnection = DDP.connect('http://localhost:4000');
const authConnection = DDP.connect("http://localhost:3000");

const App = () => {
  const fetchDemo = () => {
    // serviceConnection.call('services.test', (error, result) => { console.log("!!!", result, " or error ", error) });
  };
  const createUser = () => {
    authConnection.call("authorization:createUser", (error, result) => {
      console.log("!!!", result, " or error ", error);
    });
  };
  const getUsers = () => {
    authConnection.call("users:findAll", (error, result) => {
      console.log("!!!", result, " or error ", error);
    });
  };
  const login = () => {
    Accounts.callLoginMethod({
      methodName: "authorization:validateUserAndLogin",
      methodArguments: [{ username: "minhlee", password: "123456" }],
      userCallback: (error) => {
        if (error) {
          console.log("callLoginMethod ", error);
        }
      },
    });
  };
  const checkLoggedIn = () => {
    console.log(
      "From client Askers",
      Accounts.userId(),
      " --- ",
      Meteor.userId()
    );
  };
  const logout = () => {
    Meteor.logout();
  };

  return (
    <div>
      I am Askers!
      <button onClick={fetchDemo}>Test fetching another server</button>
      <button onClick={createUser}>Sign up</button>
      <button onClick={getUsers}>Get list uesrs</button>
      <button onClick={login}>Sign in</button>
      <button onClick={checkLoggedIn}>Check logged in ?</button>
      <button onClick={logout}>Log out</button>
      <HelloWorld />
      <BaseTable />
    </div>
  );
};
export default App;
