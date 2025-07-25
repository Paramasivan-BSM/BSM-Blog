const mongoose = require("mongoose");

const signupSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    }
});

const SignupModel = mongoose.model("Signup", signupSchema);

module.exports = SignupModel;
