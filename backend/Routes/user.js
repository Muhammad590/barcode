const express = require("express");
const router = express.Router();
const user_Controller = require('../Controller/user');





router.post('/login', user_Controller.login);
router.post('/userregister', user_Controller.userregister);
router.post('/emplyoyinfo', user_Controller.employinfo);



module.exports = router;