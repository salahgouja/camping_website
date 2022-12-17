const mongoose = require("mongoose");
const uri =
  "mongodb+srv://salah:salah1234@cluster0.lbnfdxo.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(uri, (error) => {
  if (error) {
    console.log("error in db connection : ", error);
  } else {
    console.log("connect to DB");
  }
});
