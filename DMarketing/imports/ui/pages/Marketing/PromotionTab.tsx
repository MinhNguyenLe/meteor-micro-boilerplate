import React from 'react';
import ComboVouchers from './ComboVoucher';

import {BaseTabs} from "@bbepacks/components-base";

const PromotionTab = () => (
  <BaseTabs
    data-cy="cy_tabs_promotion"
    items={[{ label: 'Combo vouchers', children: <ComboVouchers />, key: '4' }]}
    defaultActiveKey="4"
    className="tabs"
    destroyInactiveTabPane
  />
);

export default PromotionTab;
