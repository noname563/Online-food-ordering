const mongoose = require("mongoose");
const mongoURL =
  "mongodb+srv://naikharsh0506:cote563@cluster0.djrcclx.mongodb.net/foodapp?retryWrites=true&w=majority&appName=Cluster0";

const mongodb = async function () {
  try {
    await mongoose.connect(mongoURL);
    console.log("connected to database");
    const fooddata = await mongoose.connection.db.collection("fooditem");

    global.fooditem = await fooddata.find({}).toArray();
    if (fooditem) {
      const foodcategory=await mongoose.connection.db.collection("foodcategory");
      global.foodcat=await foodcategory.find({}).toArray();
      if(!foodcat){
        console.log("error with foodcat");
      }
   }
    else{
      console.log("something went wrong in fooditem");
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = mongodb;
