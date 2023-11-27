import { Meteor } from 'meteor/meteor';

function getParamsPagination(pagination: any, sort?: any): any {
  const { pageNumber, pageSize } = pagination;
  if (!sort) {
    return {
      skip: pageNumber > 0 ? pageSize * (pageNumber - 1) : 0,
      limit: pageSize,
    };
  }

  return {
    skip: pageNumber > 0 ? pageSize * (pageNumber - 1) : 0,
    limit: pageSize,
    sort,
  };
}

const combo = new Mongo.Collection("vn_comboVoucher")

Meteor.methods({
  'promotion.getListComboWithPagination'(pagination: any) {
    const { skip, limit, sort } = getParamsPagination(pagination, {
      createdAt: -1,
    });

    const cursor = combo.find(
      { status: 'ACTIVE' },
      {
        skip,
        limit,
        sort,
      }
    );

    return { data: cursor.fetch(), total: cursor.count() };
  },
});
