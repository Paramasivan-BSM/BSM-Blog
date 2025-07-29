let express = require("express")
let dotenv = require("dotenv");
let path = require("path")
let cors = require("cors");
let {DBConnection} = require(path.join(__dirname,"utilities","DB.js"))
const authRouter = require(path.join(__dirname,"module","auth.module"));

dotenv.config()


let app = express();

DBConnection()
app.use(express.json())
app.use(cors())


app.use("/api/auth",authRouter)



app.listen(process.env.PORT,()=>{
    console.log(`http://localhost:${process.env.PORT}`);
    
})
