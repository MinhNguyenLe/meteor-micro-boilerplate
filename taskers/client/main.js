import { render } from 'react-dom';
import React from 'react';
import { DDP } from 'meteor/ddp-client';

const remote = 'http://localhost:4000';
const serviceConnection = DDP.connect(remote);

const AppComponent = () => {
  const fetchDemo = () => {
    serviceConnection.call('services.test', (error, result) => { console.log("!!!", result, " or error ", error) });

  }
  return (
    <div><button onClick={fetchDemo}>Test fetching another server</button></div>
  )
}

Meteor.startup(() => {
  render(<AppComponent />, document.getElementById('react-root'));
});
