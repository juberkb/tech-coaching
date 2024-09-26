const mongoose = require('mongoose');
// const dotenv = require('dotenv');
const config=require("config");

const dbgr =require("debug") ("development:mongoooseose");  //only name you can whatever you want("development:monggose") 
// dotenv.config();
mongoose
.connect(`${config.get("MONGODB_URI")}/tech-coaching-backend`)
.then(
  function(){
    dbgr("conected")
    console.log("MongoDB connected successfully");  // Fallback to ensure output
  }
)
.catch(function(error){
  dbgr(error)
  console.log("error connecting MongoDB ");  // Fallback to ensure output
})

// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGODB_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log('MongoDB connected');
//   } catch (error) {
//     console.error('Error connecting to MongoDB:', error);
//     process.exit(1);
//   }
// };

// module.exports = connectDB;
