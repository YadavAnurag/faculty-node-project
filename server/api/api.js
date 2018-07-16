var router = require('express').Router();

// mounting other routers
router.use('/users', require('./user/userRoutes'));
router.use('/publication', require('./publication/publicationRoutes'));
module.exports = router;
