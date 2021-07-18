const mongoose = require("mongoose");
const app = require("./app");

// mongo db connection
// User name and password is given here as open due to access for but this type of practice is not good use env varibales and set them in production website
mongoose
  .connect()
  .then((con) => {
    console.log("DB connection established");
  });

// listening in port 8000
app.listen(8000, () => {
  console.log(`app running on port 8000`);
});


