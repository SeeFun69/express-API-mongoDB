const dbConfig = require("../../config/db.config.js");

const mongoose = require("mongoose");
const mongoosePaginate = require('mongoose-paginate-v2');

mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.article = require("./article.model.js")(mongoose, mongoosePaginate);
db.comment = require("./comment.model.js")(mongoose);

module.exports = db;