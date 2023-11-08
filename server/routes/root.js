const express = require("express");
const router = express.Router();
const path = require("path");
// import { fileURLToPath } from "url";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// const __dirname = path.dirname(new URL(import.meta.url).pathname);

router.get("^/$|/index(.ejs)?", (req, res) => {
  res.render(path.join(__dirname, "..", "views", "index.ejs"));
});

module.exports = router;
