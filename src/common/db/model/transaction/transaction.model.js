import mongoose from "mongoose";

export const TransactionSchema = new mongoose.Schema({
    type: String,
    amount: Number,
    cashboxId: Number,
    categoryId: Number,
    date: Number,
    comment: String
})

export default mongoose.model("TRANSACTION", TransactionSchema)