const router = require('express').Router();

const { renderLogin, login, renderRegister, register } = require('../../controllers/auth/authController');

router.route('/login').get(renderLogin).post(login);

router.route('/register').get(renderRegister).post(register);

module.exports = router;