import { getIsoCode } from 'api/helpers';
import { Meteor } from 'meteor/meteor';
import { EIsoCode } from 'types-root/common';
import {
  getCollectionByAreaStyle1,
  getCollectionByAreaStyle2,
  getCollectionByAreaStyle3,
  getCollectionByAreaStyle4,
  getCollectionNameStyle1,
  getCollectionNameStyle2,
  getCollectionNameStyle3,
  getCollectionNameStyle4,
} from './collectionStyle';
import {
  getCollectionBackendDb,
  getCollectionsByArea,
  getSpecialCollectionByArea,
  getUsersCollections,
} from './controllers';
import {
  INSTANCE_AUTH_COLLECTIONS,
  STORAGE_INSTANCES_COLLECTIONS,
} from './instances';
import { db27017 } from './mongoMethods';

export function getFieldNameByIsoCode(fieldName: string) {
  const isoCode = getIsoCode();

  if (isoCode === EIsoCode.VN) return fieldName;
  return `${isoCode}_${fieldName}`;
}

export {
  getCollectionsByArea,
  getSpecialCollectionByArea,
  getCollectionBackendDb,
  getUsersCollections,
  getCollectionNameStyle1,
  getCollectionByAreaStyle1,
  getCollectionNameStyle2,
  getCollectionByAreaStyle2,
  getCollectionNameStyle3,
  getCollectionByAreaStyle3,
  getCollectionNameStyle4,
  getCollectionByAreaStyle4,
};

// Legacy: Get All Task Posted (as example)
// eslint-disable-next-line meteor/audit-argument-checks
Meteor.publish('tasksPosted', (params) =>
  getCollectionsByArea('task').find({
    status: 'POSTED',
    isoCode: params?.isoCode,
    'taskPlace.city': { $in: params?.cities },
    'serviceText.en': { $in: params?.services },
  })
);

// For unit testing
const exportForTesting = () => {
  if (Meteor.isTest || Meteor.isAppTest) {
    return {
      db27017,
      INSTANCE_AUTH_COLLECTIONS,
      STORAGE_INSTANCES_COLLECTIONS,
    };
  }
  return {
    db27017: {},
    INSTANCE_AUTH_COLLECTIONS: {},
    STORAGE_INSTANCES_COLLECTIONS: {},
  };
};
export const forTesting = exportForTesting();
