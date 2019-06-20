"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var house_1 = require("../models/house");
var router = express.Router();
router.get('/', function (req, res) {
    house_1.default.find()
        .then(function (houses) { return res.json(houses); })
        .catch(function (err) { return res.json(err); });
});
router.get('/:id', function (req, res) {
    house_1.default.findOne({ _id: req.params.id })
        .then(function (house) { return res.json(house); })
        .catch(function (err) { return res.json(err); });
});
router.post('/', function (req, res) {
    var house = new house_1.default();
    house.name = req.body.name;
    house.rooms = req.body.rooms;
    house.save()
        .then(function (newHouse) { return res.json(newHouse); })
        .catch(function (err) { return res.json(err); });
});
router.put('/:id', function (req, res) {
    house_1.default.findOne({ _id: req.params.id })
        .then(function (house) {
        house.name = req.body.name;
        house.rooms = req.body.rooms;
        house.save()
            .then(function (house) { return res.json(house); })
            .catch(function (err) { return res.json(err); });
    })
        .catch(function (err) { return res.json(err); });
});
router.delete('/:id', function (req, res) {
    house_1.default.remove({ _id: req.params.id })
        .then(function (house) { return res.json(house); })
        .catch(function (err) { return res.json(err); });
});
exports.default = router;
