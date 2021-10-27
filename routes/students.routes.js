const express = require('express');
const router = express.Router();
const student = require('../controller/student.controller');

router.post('/', student.createStudent);
router.get('/', student.getStudent);
router.get('/:id', student.getStudentbyId);
router.put('/:id', student.updateStudent);
router.delete('/:id', student.deleteStudentbyId);
router.post('/bulk', student.createStudent);

module.exports = router