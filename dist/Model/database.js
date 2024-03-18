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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Event = exports.Student = exports.connectToDatabase = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
require("dotenv/config");
mongoose_1.default.set('strictQuery', true);
const connectToDatabase = () => __awaiter(void 0, void 0, void 0, function* () {
    mongoose_1.default
        .connect(process.env.CONNECTION_STRING, {
        dbName: 'eaze',
        connectTimeoutMS: 40000,
    })
        .then(() => {
        console.log('Database Connection Succeeded');
    })
        .catch(err => {
        console.log(`An error occurred connecting to database: ${err}`);
    });
});
exports.connectToDatabase = connectToDatabase;
mongoose_1.default.connection.on('error', err => {
    console.log(`An error occurred connecting to database: ${err},\n...reconnecting`);
    (0, exports.connectToDatabase)();
});
const EventSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true,
    },
    eventLocation: {
        type: String,
        required: true,
    },
    startTime: {
        type: String,
        required: true,
    },
    endTime: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
});
const StudentSchema = new mongoose_1.default.Schema({
    matricNumber: {
        type: String,
        required: true,
        unique: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
});
exports.Student = mongoose_1.default.model('Student', StudentSchema);
exports.Event = mongoose_1.default.model('Event', EventSchema);
