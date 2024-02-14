const { DataSource } = require("typeorm"); // eslint-disable-line
const ds = new DataSource(require('./ormconfig')); // eslint-disable-line
module.exports = { ds };
