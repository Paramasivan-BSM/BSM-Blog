let path = require("path");
let jwt = require("jsonwebtoken");
let bcrypt = require("bcrypt");
const signupdata = require(path.join(__dirname, "..", "model", "signup.model.js"));
let tokenprovider = require(path.join(__dirname,"..","utilities","tokengenerator.js"));

module.exports = {

  signup: async (req, res) => {
    
      const { name, email, password } = req.body;

      const exist = await signupdata.findOne({ email });

      if (exist) {
        return res.json({
          status: false,
          msg: "Email Already Exists!"
        });
      }

     
      const hashedPassword = await bcrypt.hash(password, 10);

      await signupdata.create({
        name,
        email,
        password: hashedPassword
      })
      .then(()=>{
          return res.json({
        status: true,
        msg: "Account Created"
      });

      })
      .catch(()=>{

        console.error("Signup error:", err);
      return res.status(500).json({
        status: false,
        msg: "Error creating account"
      });

      })

    

    
  },

  signin: async (req, res) => {
    let { email, password } = req.body;

    let exist = await signupdata.findOne({ email: email })
 
    // Checking Email
    if (!exist) {
      return res.json({
        status: false,
        msg: "Email Not Found"
      });
    }



let logstatus = await bcrypt.compare(password,exist.password);


if(!logstatus){

  return res.json({
    msg:"invalid password",
    status:false
  })

}

  let authtoken = tokenprovider(exist)

    res.json({
      msg:"Login Successful!",
      data:exist,
      id:authtoken
    })
  }

};
