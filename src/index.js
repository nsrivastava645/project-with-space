const fs = require("fs");
const path = require('path');
let content = fs.readFileSync(path.join("C:", "check", "project with space", "file.txt"), "utf-8");
console.log(content);