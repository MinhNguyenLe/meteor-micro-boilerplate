import camelCase from 'lodash/camelCase';
import {
  AUTH_COLLECTIONS,
  COMMON_COLLECTIONS_NAME,
  ID_COLLECTIONS_NAME,
  TH_COLLECTIONS_NAME,
  VN_COLLECTIONS_NAME,
} from './collectionName';
import {
  declareCollectionBackendDb,
  declareCollectionDB27017,
} from './mongoMethods';

/**
 *
 * @param {string[]} collectionsName
 * @returns
 * List instances of list collections name
 * @example
 * ["vn_collection"] => [{ vnCollection: new Mongo.Collection(name, db) }]
 * @description
 * Want to store list instances of collections by area (Iso code)
 * @requires
 * Dont check null/undefined so must pass collectionsName
 */
function declareInstances(collectionsName: Array<string>) {
  const instances: any = {};

  for (let i = 0; i < collectionsName.length; i += 1) {
    instances[camelCase(collectionsName[i])] = declareCollectionDB27017(
      collectionsName[i]
    );
  }

  return instances;
}

function declareInstancesBackendDb(collectionsName: Array<string>) {
  const instances: any = {};

  for (let i = 0; i < collectionsName.length; i += 1) {
    instances[camelCase(collectionsName[i])] = declareCollectionBackendDb(
      collectionsName[i]
    );
  }

  return instances;
}

/**
 * 27017
 */
const INSTANCES_ID_COLLECTIONS = declareInstances(ID_COLLECTIONS_NAME);
const INSTANCES_TH_COLLECTIONS = declareInstances(TH_COLLECTIONS_NAME);
const INSTANCES_VN_COLLECTIONS = declareInstances(VN_COLLECTIONS_NAME);

/**
 * 3001
 */
export const INSTANCE_AUTH_COLLECTIONS =
  declareInstancesBackendDb(AUTH_COLLECTIONS);

/**
 * @description
 * Storage instances of collections name
 */
export const STORAGE_INSTANCES_COLLECTIONS = {
  TH: INSTANCES_TH_COLLECTIONS,
  VN: INSTANCES_VN_COLLECTIONS,
  ID: INSTANCES_ID_COLLECTIONS,
};

export const COMMON_COLLECTIONS_INSTANCE = declareInstances(
  COMMON_COLLECTIONS_NAME
);
