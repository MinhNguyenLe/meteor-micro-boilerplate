import camelCase from 'lodash/camelCase';
import { Meteor } from 'meteor/meteor';
import { COMMON_COLLECTIONS_NAME } from '../collectionName';
import { checkCollectionName, isHaveCollection } from '../controllers';
import { COMMON_COLLECTIONS_INSTANCE } from '../instances';

export function getCollectionByAreaStyle4(collectionName: string) {
  checkCollectionName(collectionName);

  if (
    isHaveCollection({
      collectionsChecking: COMMON_COLLECTIONS_NAME,
      collectionName,
    })
  ) {
    return COMMON_COLLECTIONS_INSTANCE[camelCase(collectionName)];
  }

  throw new Meteor.Error(`${collectionName} don't exist`);
}

export function getCollectionNameStyle4(collectionName: string) {
  return collectionName;
}
