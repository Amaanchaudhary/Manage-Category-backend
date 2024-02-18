import { Router } from "express";
import CategoryRoutes from './Category.Routes.js'

const router = Router()

router.use("/category" , CategoryRoutes)

export default router