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
const UserController = {
    createStudent: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { matricNumber, firstName, lastName, email } = req.body;
        database_1.Student.create({ matricNumber, firstName, lastName, email })
            .then(result => {
            res.status(201).json({ result, message: 'success' });
        })
            .catch(err => {
            res.status(500).json({ error: err, message: 'An error occured' });
        });
    }),
    getSingleStudent: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { matricNumber } = req.query;
        try {
            const student = yield database_1.Student.findOne({
                matricNumber: matricNumber,
            });
            if (!student) {
                return res.status(404).json({ message: 'Student not found' });
            }
            return res.status(200).json({ message: 'Successful', student });
        }
        catch (error) {
            return res.status(500).json({ error, message: 'An error occured' });
        }
    }),
};
exports.default = UserController;
