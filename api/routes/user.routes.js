const express = require('express')
const router = express.Router()
const usersController = require('../app/controllers/user.controller.js')

router.get('/users', usersController.getAll)
router.post('/users', usersController.addUser)

module.exports = router