const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(process.env.URL_MONGO)
  .then(() => console.log("Database connected"))
  .catch((error) => console.log(`Error connected database :  ${error}`));

// Close the connection when the app is destroyed
process.on("SIGINT", () => {
  mongoose.connection.close(() => {
    console.log(
      "Conexão com o banco de dados fechada devido ao término do aplicativo"
    );
    process.exit(0);
  });
});

module.exports = mongoose;
