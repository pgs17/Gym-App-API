const express=require('express')
const { loginuser, signupuser } = require('../Controllers/UserController')

const router = express.Router()

// login a user
router.post('/login',loginuser)

// signup a user
router.post('/signup',signupuser)


module.exports=router