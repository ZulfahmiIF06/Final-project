const express = require("express");
const app = express();
require('dotenv').config();
const cors = require("cors");

const database = require("./config/database");
database();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

const productRoute = require("./routes/productRoute");
app.use("/product", productRoute);


const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`);
});
