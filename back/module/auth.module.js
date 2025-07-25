let express = require("express");
let path = require("path");
const { signup, signin } = require(path.join(__dirname,"..","controller","auth.controller.js"));

let authRouter = express.Router()


authRouter.post("/signup",signup)
authRouter.post("/signin",signin)



module.exports = authRouter;

