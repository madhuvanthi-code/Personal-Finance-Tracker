const Expense=require('.../models/Expense');
const {createObjectCsvWriter}=require('csv-writer');
const path=require('path');
exports.addExpense=async(req,res)=>{
    const expense=await Expense.create({...req.body, userId: req.user.userId});
}