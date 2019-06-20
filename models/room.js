"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var roomSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    area: {
        type: Number,
        required: true
    }
});
exports.default = roomSchema;
