const mongoose = require('mongoose');
const ExpenseSchema = new mongoose.Schema({userId:String, amount:Number})