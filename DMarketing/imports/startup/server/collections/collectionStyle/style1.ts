import { getIsoCode } from 'api/helpers';
import camelCase from 'lodash/camelCase';
import { Meteor } from 'meteor/meteor';
import { EIsoCode } from 'types-root/common';
import { STORAGE_COLLECTIONS_NAME } from '../collectionName';
import { checkCollectionName, isHaveCollection } from '../controllers';
import { STORAGE_INSTANCES_COLLECTIONS } from '../instances';

export function getCollectionNameStyle1(collectionName: string) {
  checkCollectionName(collectionName);

  const isoCode = getIsoCode();

  if (isoCode === EIsoCode.VN || isoCode === EIsoCode.TH) {
    return collectionName;
  }
  return `${isoCode.toLowerCase()}_${collectionName}`;
}

export function getCollectionByAreaStyle1(collectionName: string) {
  checkCollectionName(collectionName);

  const isoCode = getIsoCode();

  const collectionNameStyle1 = getCollectionNameStyle1(collectionName);

  if (isoCode === EIsoCode.VN || isoCode === EIsoCode.TH) {
    if (
      isHaveCollection({
        collectionsChecking: STORAGE_COLLECTIONS_NAME[EIsoCode.VN],
        collectionName,
      })
    ) {
      return STORAGE_INSTANCES_COLLECTIONS[EIsoCode.VN][
        camelCase(collectionName)
      ];
    }

    throw new Meteor.Error(`Not support ${collectionName} !`);
  }

  if (
    isHaveCollection({
      collectionsChecking: STORAGE_COLLECTIONS_NAME[isoCode],
      collectionName: collectionNameStyle1,
    })
  ) {
    return STORAGE_INSTANCES_COLLECTIONS[isoCode][
      camelCase(collectionNameStyle1)
    ];
  }

  throw new Meteor.Error(`Not support ${collectionName} !`);
}
