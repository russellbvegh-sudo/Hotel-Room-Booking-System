/**
 * @name Hotel Room Booking System
 * @author Russell Vegh
 * @description Hotel Room Booking and Management System Software ~ Developed By Russell Vegh
 * @copyright ©2023 ― Russell Vegh. All rights reserved.
 * @version v0.0.1
 *
 */

const router = require('express').Router();
const { getDashboardData } = require('../controllers/apps.controllers');
const { isAuthenticatedUser, isBlocked, isAdmin } = require('../middleware/app.authentication');

// get dashboard info by admin
router.route('/dashboard').get(isAuthenticatedUser, isBlocked, isAdmin, getDashboardData);

module.exports = router;
