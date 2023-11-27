import { getIsoCode } from 'api/helpers';
import camelCase from 'lodash/camelCase';
import { Meteor } from 'meteor/meteor';
import { STORAGE_COLLECTIONS_NAME } from '../collectionName';
import { checkCollectionName, isHaveCollection } from '../controllers';
import { STORAGE_INSTANCES_COLLECTIONS } from '../instances';

//  x(area isoCode): x_collectionName
export function getCollectionByAreaStyle3(collectionName: string) {
  checkCollectionName(collectionName);

  const isoCode = getIsoCode();

  // add prefix (vn_, th_, id_) into collection targeting
  const collectionNameWithArea = `${isoCode.toLowerCase()}_${collectionName}`;

  if (
    isHaveCollection({
      collectionsChecking: STORAGE_COLLECTIONS_NAME[isoCode],
      collectionName: collectionNameWithArea,
    })
  ) {
    return STORAGE_INSTANCES_COLLECTIONS[isoCode][
      camelCase(collectionNameWithArea)
    ];
  }

  throw new Meteor.Error(
    `${collectionName} don't exist with iso code ${isoCode}!`
  );
}

export function getCollectionNameStyle3(collectionName: string) {
  checkCollectionName(collectionName);

  const isoCode = getIsoCode();
  return `${isoCode.toLowerCase()}_${collectionName}`;
}
