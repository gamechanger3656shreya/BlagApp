const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const colors = require("colors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

//env config
dotenv.config();

//router import
const userRoutes = require("./Routes/userRoutes");
const blogRoutes = require("./Routes/blogRoutes");

//mongodb connection
connectDB();



//rest objecct
const app = express();

//middelwares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/blog", blogRoutes);


// Port
const PORT = process.env.PORT || 9000;

//listen
app.listen(8080, () => {
  console.log(
    `Server Running on ${process.env.DB_URL} mode port no ${PORT}`.bgCyan
      .white
  );
});
