const { Router } = require('express');
const { reset } = require('../services/nibss');

const router = Router();

router.get(
  '/reset',
  reset,
);

module.exports = router;
