"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const EventController_1 = __importDefault(require("../Controller/EventController"));
const UserController_1 = __importDefault(require("../Controller/UserController"));
const router = express_1.default.Router();
router.get('/', (req, res) => {
    res.status(200).json({ message: 'Good' });
});
router.get('/events', EventController_1.default.getEvents);
router.post('/events', EventController_1.default.createEvent);
router.post('/student', UserController_1.default.createStudent);
router.get('/student', UserController_1.default.getSingleStudent);
exports.default = router;
