const mongoose = require('mongoose');
const ExpenseSchema = new mongoose.Schema({userId:{type:mongoose.Schema.Types.OnjectId, ref:'User', required:true}, amount:Number, category:String, date:{type:Date, default:Date.now}, description:String});
module.exports=mongoose.model('Expense', ExpenseSchema);