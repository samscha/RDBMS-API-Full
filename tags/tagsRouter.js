const express = require('express');
const router = express.Router();

const {
  check,
  request,
  create,
  requestId,
  update,
  del,
} = require('./tagsController');

router
  .route('/')
  .get(request)
  .post(check.tag, create);

router
  .route('/:id')
  .get(check.id, requestId)
  .put(check.id, update)
  .delete(check.id, del);

module.exports = router;
