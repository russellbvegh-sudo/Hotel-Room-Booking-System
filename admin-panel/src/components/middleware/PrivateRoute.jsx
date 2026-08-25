/**
 * @name Hotel Room Booking System
 * @author Russell Vegh
 * @description Hotel Room Booking and Management System Software ~ Developed By Russell Vegh
 * @copyright ©2023 ― Russell Vegh. All rights reserved.
 * @version v0.0.1
 *
 */

import { Navigate } from 'react-router-dom';
import { getSessionToken, getSessionUser } from '../../utils/authentication';

function PrivateRoute({ children }) {
  const user = getSessionUser();
  const token = getSessionToken();

  if (!user && !token) {
    return <Navigate to='/auth/login' replace />;
  }
  return children;
}

export default PrivateRoute;
