const path = require("path");

// require.main is a built in node feature
module.exports = path.dirname(require.main.filename);
