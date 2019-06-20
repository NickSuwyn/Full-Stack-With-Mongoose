"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var room_1 = require("./room");
var houseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    rooms: {
        type: [room_1.default]
    }
});
exports.default = mongoose.model('House', houseSchema);
