import { getIsoCode } from 'api/helpers';
import camelCase from 'lodash/camelCase';
import { Meteor } from 'meteor/meteor';
import { EIsoCode } from 'types-root/common';
import { STORAGE_COLLECTIONS_NAME } from '../collectionName';
import { checkCollectionName, isHaveCollection } from '../controllers';
import { STORAGE_INSTANCES_COLLECTIONS } from '../instances';

export function getCollectionNameStyle2(collectionName: string) {
  checkCollectionName(collectionName);

  const isoCode = getIsoCode();

  if (isoCode === EIsoCode.VN) {
    return collectionName;
  }
  return `${isoCode.toLowerCase()}_${collectionName}`;
}

export function getCollectionByAreaStyle2(collectionName: string) {
  checkCollectionName(collectionName);

  const isoCode = getIsoCode();
  const collectionNameWithStyle2 = getCollectionNameStyle2(collectionName);

  if (
    isHaveCollection({
      collectionsChecking: STORAGE_COLLECTIONS_NAME[isoCode],
      collectionName: collectionNameWithStyle2,
    })
  ) {
    return STORAGE_INSTANCES_COLLECTIONS[isoCode][
      camelCase(collectionNameWithStyle2)
    ];
  }

  throw new Meteor.Error(
    `${collectionName} don't exist with iso code ${isoCode}!`
  );
}
