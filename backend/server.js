const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const colors = require("colors");
const port = process.env.PORT || 5000;

const morgan = require("morgan");
app.use(morgan("dev"));
connectDB();  
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", require("./routes/goalRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/admin", require("./routes/adminRoutes"));


app.use(errorHandler);
app.listen(port, () => console.log(`Server started on port ${port}!`));
