require("dotenv").config();
const express = require("express");
const cors = require("cors");
const ejs = require("ejs");
const expressLayouts = require("express-ejs-layouts");
const path = require("path");
const errorHandler = require("./middleware/errorHandler.js");
const { logger } = require("./middleware/logEvents.js");
// const fetch = require("node-fetch");
// const puppeteer = require("puppeteer");
// const asyncHandler = require("express-async-handler");
// const { nanoid } = require("nanoid");
// import { fileURLToPath } from "url";

const app = express();
const PORT = process.env.PORT || 4444;

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// const __dirname = path.dirname(new URL(import.meta.url).pathname);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname + "/views"));
app.set("layout", "layouts/layout");
// app.engine("html", ejs.renderFile);
app.use(expressLayouts);

app.use(logger);
app.use(cors()); // cors(corsOptions)
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "/public")));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.use("/", require("./routes/root.js"));

app.all("*", (req, res) => {
  res.render(path.join(__dirname, "views", "404.ejs"));
});

app.use(errorHandler);

// mongoose.connection.once("open", () => {
//   console.log(`Connected to ${process.env.MONGODB_DB}`);
// });

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
