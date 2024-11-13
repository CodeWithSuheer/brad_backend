const express = require('express');
const { getBootcamps, deleteBootcamps, updateBootcamps, createBootcamps, getAllBootcamps } = require('../controllers/bootcamps');

const router = express.Router();

router.route('/').get(getAllBootcamps).post(createBootcamps);
router.route('/:id').get(getBootcamps).put(updateBootcamps).delete(deleteBootcamps);

module.exports = router;
