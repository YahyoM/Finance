import {createTransactionService} from "../../../common/service/transaction/transaction.service.js"

export async function transactionCreateHandler(request, response){
    try {
        const data = request.body
        const res = await createTransactionService(data)
        return response.json({
            status: 200,
            message: "Ok",
            data: res
        })
    } catch (error) {
        response.json({
            status: 400,
            message: error.message
        })
    }
}