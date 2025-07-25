let mongoose = require("mongoose");

 
async function DBConnection() {
  try {
    await mongoose.connect(process.env.DBURI);
    console.log("Database Connected!");
  } catch (err) {
    console.log("Error to Connect DB:", err.message);
  }
}



module.exports = {DBConnection}