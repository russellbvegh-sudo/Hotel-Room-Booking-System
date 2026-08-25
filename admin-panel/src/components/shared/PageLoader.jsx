/**
 * @name Hotel Room Booking System
 * @author Russell Vegh
 * @description Hotel Room Booking and Management System Software ~ Developed By Russell Vegh
 * @copyright ©2023 ― Russell Vegh. All rights reserved.
 * @version v0.0.1
 *
 */

import { Layout, Spin } from 'antd';
import React from 'react';

const { Content } = Layout;

function PageLoader() {
  return (
    <Content className='page-loader'>
      <Spin
        size='large'
        tip='Loading...'
      />
    </Content>
  );
}

export default PageLoader;
