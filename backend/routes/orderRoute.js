import express from express
import authMiddleware from "../middleware/auth.js"
import { placeOrder } from "../controllers/orderController.js"


const orderRouter = express.orderRouter

orderRouter.post("/place", authMiddleware, placeOrder)

export default orderRouter
