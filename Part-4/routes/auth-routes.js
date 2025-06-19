const express = require('express');
const authController = require('../controllers/auth.controller');

const router = express.Router();

router.post('/sign-up', authController.handleSignUp);
router.post('/sign-in', authController.handleSignIn);
router.get('/me', authController.handleMe);

module.exports = router;