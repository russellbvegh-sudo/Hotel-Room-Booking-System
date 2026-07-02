/**
 * @name Hotel Room Booking System
 * @author Jose Rosario
 * @description Hotel Room Booking and Management System Software ~ Developed By Jose Rosario
 * @copyright ©2023 ― Jose Rosario. All rights reserved.
 * @version v0.0.1
 *
 */

import { notification } from 'antd';

const notificationWithIcon = (type, title, msg) => {
  notification[type]({
    message: title,
    description: msg
  });
};

export default notificationWithIcon;
