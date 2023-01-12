import { Router } from "express";
import {transactionCreateHandler} from "../../handler/transaction/transaction.handler.js";
import {transactionValidation} from "../../middleware/validation.js";

const route = Router()

route.post('/', transactionValidation, transactionCreateHandler)

export default route