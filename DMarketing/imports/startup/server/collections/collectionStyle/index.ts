/**
 * About our collections name, they confuse very much, explain a bit:
 *
 * Meteor declare collection by collection name one time, and use in all cycle of Web app
 *
 * Style of collection name in App DB (we have 2 type of DB: App and Back office)
 *
 * When support TH & VN (old)
 * 1. Style 1: we just have 1 collection for all areas: collectionName (VN $ TH)
 * 2. Style 2: we have 2 style & collection name:
 *          collectionName (VN) & th_collectionName (TH)
 * 3. Style 3: we have 2 style of collection name:
 *          vn_collectionName (VN) & th_collectionName (TH)
 * 4. Style 4: each area have different collection
 *          paymentTransaction (VN) & payment2C2PTransaction (TH)
 *
 * When support TH & VN & ID & new area in future
 * (add prefix _X with each collection name in country X), like:
 * 1. Style 1: we have 2 style of collection name:
 *          collectionName (VN & TH) & id_collectionName (ID)
 * 2. Style 2: we have 3 style of collection name:
 *          collectionName (VN) & th_collectionName (TH) & id_collectionName (ID)
 * 3. Style 3: we have 3 style of collection name:
 *          vn_collectionName (VN) & th_collectionName (TH) & id_collectionName (ID)
 * 4. Style 4: common collection name for all areas: collectionName
 *
 * So, when connect db and get collection, we must to access with 3 styles
 *      style 1, 2 is legacy code, you maybe don't need to care about them
 *      new collection after 6/2023 will use style 3
 * In the future, when clone Back office for another areas,
 *      (if I out) please notice Go(server) team create collection with name is style 3:
 *      x(new area): x_collectionName
 */

import { getCollectionByAreaStyle1, getCollectionNameStyle1 } from './style1';
import { getCollectionByAreaStyle2, getCollectionNameStyle2 } from './style2';
import { getCollectionByAreaStyle3, getCollectionNameStyle3 } from './style3';
import { getCollectionByAreaStyle4, getCollectionNameStyle4 } from './style4';

export {
  getCollectionNameStyle1,
  getCollectionByAreaStyle1,
  getCollectionNameStyle2,
  getCollectionByAreaStyle2,
  getCollectionNameStyle3,
  getCollectionByAreaStyle3,
  getCollectionNameStyle4,
  getCollectionByAreaStyle4,
};
