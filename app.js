"use strict";
var express = require("express");
var path = require("path");
var logger = require("morgan");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var cors = require("cors");
var index_1 = require("./routes/index");
var users_1 = require("./routes/users");
var houses_1 = require("./api/houses");
// var CONNECTION_STRING = 'mongodb://nick:98765@ds161159.mlab.com:61159/sampledb_ns';
var CONNECTION_STRING = 'mongodb://nick:98765@house-db-shard-00-00.azmqp.mongodb.net:27017,house-db-shard-00-01.azmqp.mongodb.net:27017,house-db-shard-00-02.azmqp.mongodb.net:27017/<dbname>?ssl=true&replicaSet=atlas-xnlquv-shard-0&authSource=admin&retryWrites=true&w=majority';
mongoose.connect(CONNECTION_STRING)
    .then(function () { return console.log('connection established'); })
    .catch(function (err) { return console.log(err); });
var app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/bower_components', express.static(path.join(__dirname, 'bower_components')));
app.use('/ngApp', express.static(path.join(__dirname, 'ngApp')));
app.use('/api', express.static(path.join(__dirname, 'api')));
app.use(cors());
app.use('/', index_1.default);
app.use('/users', users_1.default);
app.use('/api/houses', houses_1.default);
app.get('/*', function (req, res, next) {
    if (/.js|.html|.css|templates|js|scripts/.test(req.path) || req.xhr) {
        return next({ status: 404, message: 'Not Found' });
    }
    else {
        return res.render('index');
    }
});
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err['status'] = 404;
    next(err);
});
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err['status'] || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}
app.use(function (err, req, res, next) {
    res.status(err['status'] || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});
module.exports = app;
