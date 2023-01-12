import transactionModel from "../../db/model/transaction/transaction.model.js";

export async function createtransactionService(data) {
    try {
        const transaction = await transactionModel.create(data)
        return transaction
    } catch (error) {
        console.log(error.message);
        throw error
    }
}