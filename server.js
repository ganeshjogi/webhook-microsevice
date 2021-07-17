const mongoose = require("mongoose");
const app = require("./app");

// mongo db connection
mongoose
  .connect(
    "mongodb+srv://ganesh:yOaSYTtvMyh7HNPx@cluster0.npnmu.mongodb.net/natours?retryWrites=true&w=majority"
  )
  .then((con) => {
    console.log("DB connection established");
  });

// listening in port 8000
app.listen(8000, () => {
  console.log(`app running on port 8000`);
});


