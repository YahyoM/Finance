import { Router } from "express";
import {cashboxCreateHandler} from "../../handler/cashbox/cashbox.handler.js";
import {cashboxValidation} from "../../middleware/validation.js";

const route = Router()

route.post('/', cashboxValidation, cashboxCreateHandler)

export default route