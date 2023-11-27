import { Meteor } from 'meteor/meteor';

// import 'collections';
import './register-api';

Meteor.startup(() => {
  process.env.MAIL_URL = Meteor.settings.MAIL_URL;
  SyncedCron.start();
});
