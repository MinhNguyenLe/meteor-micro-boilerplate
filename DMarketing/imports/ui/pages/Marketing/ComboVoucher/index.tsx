import Image from 'antd/lib/image';
import Tag from 'antd/lib/tag';
import Typography from 'antd/lib/typography';

import {BaseTable, BaseTag } from '@bbepacks/components-base';
// import {formatDate, getLang } from '@bbepacks/utils';

import useGetListComboVoucher from 'hooks/useGetListComboVoucher';
import { useTranslator } from 'hooks/useTranslator';
import React from 'react';
// import { IComboVoucherItem } from 'types-root/marketing';

const ComboVouchers = () => {
  const t = useTranslator('common.MARKETING.PROMOTION.COMBO_VOUCHER');

  const { data, total, isLoading, onPagination, pagination } =
    useGetListComboVoucher();

  // const lang = getLang();

  const columns: any = [
    {
      key: 'thumbnail',
      dataIndex: 'thumbnail',
      width: 200,
      title: 'Thumbnail',
      render: (thumbnail) => <Image width={200} src={thumbnail} />,
    },
    {
      key: 'status',
      dataIndex: 'status',
      title: 'Status',
      width: 150,
      render: (_, record) => {
        if (record?.isTesting) {
          return <Tag color="geekblue">TESTING</Tag>;
        }
        return <Tag color="green">{record?.status}</Tag>;
      },
    },
    {
      key: 'cost',
      dataIndex: 'cost',
      title: 'Cost',
      render: (cost) => (
        <Typography.Text style={{ width: 100, minWidth: 100 }}>
          {cost}
        </Typography.Text>
      ),
    },
    {
      key: 'price',
      dataIndex: 'price',
      title: 'Price',
      render: (price) => (
        <Typography.Text style={{ width: 100, minWidth: 100 }}>
          {price}
        </Typography.Text>
      ),
    },
    {
      title: 'Vouchers',
      render: (_, record) => (
        <Typography.Text style={{ width: 100, minWidth: 100 }}>
          {record?.vouchers?.length}
        </Typography.Text>
      ),
    },
    // {
    //   key: 'title',
    //   dataIndex: 'title',
    //   title: `Title (${lang})`,
    //   render: (_, record) => (
    //     <Typography style={{ width: 150, minWidth: 150 }}>
    //       {record?.title?.[lang]}
    //     </Typography>
    //   ),
    // },
    // {
    //   key: 'createdAt',
    //   dataIndex: 'createdAt',
    //   title: 'Created at',
    //   render: (_, record) => (
    //     <Typography style={{ width: 80, minWidth: 80 }}>
    //       {formatDate(record?.createdAt, 'MMMM Do YYYY')}
    //     </Typography>
    //   ),
    // },
    // {
    //   key: 'startDate',
    //   dataIndex: 'startDate',
    //   title: 'Start date',
    //   render: (_, record) => (
    //     <Typography style={{ width: 80, minWidth: 80 }}>
    //       {formatDate(record?.startDate, 'MMMM Do YYYY')}
    //     </Typography>
    //   ),
    // },
    // {
    //   key: 'endDate',
    //   dataIndex: 'endDate',
    //   title: 'End date',
    //   render: (_, record) => (
    //     <Typography style={{ width: 80, minWidth: 80 }}>
    //       {formatDate(record?.endDate, 'MMMM Do YYYY')}
    //     </Typography>
    //   ),
    // },
  ];

  return (
    <>
      <BaseTable<IComboVoucherItem>
        className="cy_table_combo_voucher"
        pagination={{
          ...pagination,
          total,
          showTotal: (total) => (
            <BaseTag color="green">{`${t('TOTAL_RECORDS')} ${total}`}</BaseTag>
          ),
        }}
        size="large"
        loading={isLoading}
        columns={columns}
        dataSource={data || []}
        onChange={(newPagination) => {
          if (newPagination.current && newPagination.pageSize) {
            onPagination({
              current: newPagination.current,
              pageSize: newPagination.pageSize,
            });
          }
        }}
        scroll={{ x: 800 }}
        rowKey="_id"
      />
    </>
  );
};

export default ComboVouchers;
