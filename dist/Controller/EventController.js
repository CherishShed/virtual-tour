"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../Model/database");
const EventController = {
    createEvent: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { name, eventLocation, startTime, endTime, date, description } = req.body;
        database_1.Event.create({ name, eventLocation, startTime, endTime, date, description })
            .then(result => {
            res.status(201).json({ result, message: 'success' });
        })
            .catch(err => {
            res.status(500).json({ error: err, message: 'An error occured' });
        });
    }),
    getEvents: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const currentDate = new Date();
        database_1.Event.find()
            .then(result => {
            const events = result.filter(event => new Date(event.date) >= currentDate);
            res.status(200).json({ events, message: 'success' });
        })
            .catch(err => {
            res.status(500).json({ error: err, message: 'An error occured' });
        });
    }),
};
exports.default = EventController;
