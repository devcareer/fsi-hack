const { Router } = require('express');
const menu = require('../plugins/menu');

const router = Router();

router.post('/ussd', function(request, response) {
  menu.run(request.body, ussdResult => {
    response.send(ussdResult);
  });
});

module.exports = router;
