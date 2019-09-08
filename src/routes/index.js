const express = require('express');
const router = express.Router();

const riskGroupController = require('../controllers/riskGroupController');

// Setting layout for all "user" requests to main layout, and passing control to next handler
router.all('/*', function (req, res, next) {
  req.app.locals.layout = 'layout';
  next();
});

router.get('/', riskGroupController.home);
// router.get('/', riskGroupController.index);
// router.get('/api/riskGroups', riskGroupController.riskGroups);
router.get('/api/:id', riskGroupController.api);

module.exports = router;
