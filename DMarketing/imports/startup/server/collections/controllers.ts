import { getIsoCode } from 'api/helpers';
import camelCase from 'lodash/camelCase';
import { Meteor } from 'meteor/meteor';
import { EIsoCode } from 'types-root/common';
import { AUTH_COLLECTIONS, STORAGE_COLLECTIONS_NAME } from './collectionName';
import {
  getCollectionByAreaStyle1,
  getCollectionByAreaStyle2,
} from './collectionStyle';
import {
  INSTANCE_AUTH_COLLECTIONS,
  STORAGE_INSTANCES_COLLECTIONS,
} from './instances';
import { db27017 } from './mongoMethods';

function getSpecialCollectionByArea(
  allowed: Array<{ isoCode: EIsoCode; name: string }>
) {
  const isoCode = getIsoCode();

  // Always is array length = 1
  const getAllowedByIsoCode = allowed.filter(
    (item: any) => item.isoCode === isoCode
  );

  if (!getAllowedByIsoCode.length) {
    throw new Meteor.Error(
      `getSpecialCollectionByArea: Collection name not support with isoCode ${isoCode}!`
    );
  }

  if (
    !STORAGE_COLLECTIONS_NAME[isoCode].includes(getAllowedByIsoCode[0].name)
  ) {
    throw new Meteor.Error(
      `Collection ${getAllowedByIsoCode[0].name} from allowed list is not exist`
    );
  }

  return STORAGE_INSTANCES_COLLECTIONS[isoCode][
    camelCase(getAllowedByIsoCode[0].name)
  ];
}

/**
 * @deprecated Legacy code, use getCollectionByAreaStyle1, 2, 3, 4 instead
 */
function getCollectionsByArea(collectionName: string, isoCode?: any) {
  checkCollectionName(collectionName);

  if (!isoCode) {
    return getCollectionByAreaStyle1(collectionName);
  }

  return getCollectionByAreaStyle2(collectionName);
}

export {
  getCollectionsByArea,
  getSpecialCollectionByArea,
  getCollectionBackendDb,
  getUsersCollections,
};

export function checkCollectionName(collectionName: string) {
  if (!collectionName) {
    throw new Meteor.Error('Collection name must have value');
  }
}

// get collection from db Back office
function getUsersCollections(method: string, ...args: any) {
  if (!method || typeof method !== 'string') {
    throw new Meteor.Error(
      `Error at getUsersCollections: Method not found or empty, --${method}--`
    );
  }

  return db27017.mongo[method]('users', ...args);
}
function getCollectionBackendDb(collectionName: string) {
  checkCollectionName(collectionName);

  if (!AUTH_COLLECTIONS.includes(collectionName)) {
    throw new Meteor.Error(
      `Collection ${collectionName} don't exist in Backend DB`
    );
  }

  return INSTANCE_AUTH_COLLECTIONS[camelCase(collectionName)];
}

export function isHaveCollection({ collectionsChecking, collectionName }: any) {
  return collectionsChecking.includes(collectionName);
}
