/**
 * @name Hotel Room Booking System
 * @author Jose Rosario
 * @description Hotel Room Booking and Management System Software ~ Developed By Jose Rosario
 * @copyright ©2023 ― Jose Rosario. All rights reserved.
 * @version v0.0.1
 *
 */

function arrayToCommaSeparatedText(array) {
  return array?.length > 0 ? array
    .map((item) => item)
    .join(', ')
    .toString() : 'N/A';
}

export default arrayToCommaSeparatedText;
