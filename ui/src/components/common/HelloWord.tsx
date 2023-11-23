import React from "react";
import { Button, Table } from "antd";
import styled from 'styled-components';
import {FONT_SIZE} from "../../styles/themes/constants";

const AntdTable:any = styled(Table)`
& thead .ant-table-cell {
  color: var(--primary-color);
  font-size: ${FONT_SIZE.xs};
  line-height: 1.25rem;

  & .anticon {
    color: var(--primary-color);
  }
}
`

const HelloWorld = ({ title = "Hello" }) => (
  <>
    <span>{title}</span>
    <h1>bla</h1>
    <Button type="primary">Click Me</Button>
    <AntdTable
      dataSource={[
        {
          key: "1",
          name: "Mike",
          age: 32,
          address: "10 Downing Street",
        },
        {
          key: "2",
          name: "John",
          age: 42,
          address: "10 Downing Street",
        },
      ]}
      columns={[
        {
          title: "Name",
          dataIndex: "name",
          key: "name",
        },
        {
          title: "Age",
          dataIndex: "age",
          key: "age",
        },
        {
          title: "Address",
          dataIndex: "address",
          key: "address",
        },
      ]}
    />
    ;
  </>
);

export default HelloWorld;
