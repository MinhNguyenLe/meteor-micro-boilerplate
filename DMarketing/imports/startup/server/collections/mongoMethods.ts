// @ts-nocheck
import { Meteor } from 'meteor/meteor';

export const db27017 = new MongoInternals.RemoteCollectionDriver(
  Meteor.settings.REMOTE_MONGO_URL,
  {
    oplogUrl: Meteor.settings.OPLOG_REMOTE_MONGO,
  }
);

export const declareCollectionDB27017 = (name) =>
  new Mongo.Collection(name, { _driver: db27017 });

export const declareCollectionBackendDb = (name) => new Mongo.Collection(name);
