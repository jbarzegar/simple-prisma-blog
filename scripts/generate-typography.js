let fs = require("fs");
let path = require("path");
let Typography = require("typography");

let outDir = path.join(__dirname, "../src/typography.css");

let generated = new Typography({
  headerFontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Oxygen",
    "Ubuntu",
    "Cantarell",
    "Open Sans",
    "Helvetica Neue",
    "sans-serif"
  ],
  bodyFontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Oxygen",
    "Ubuntu",
    "Cantarell",
    "Open Sans",
    "Helvetica Neue",
    "sans-serif"
  ]
}).toString();

fs.writeFile(outDir, generated, err => {
  if (err) throw err;
});
