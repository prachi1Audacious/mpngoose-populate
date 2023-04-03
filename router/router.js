const router = require('express').Router();
//const router = new express.Router;
const Staff = require('../controller/staffcontroler')
const Right = require('../controller/rightcontroller')

router.post('/staff/create',Staff.create);
router.post('/right/create',Right.create);

module.exports = router;