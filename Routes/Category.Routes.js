import { Router } from 'express'
import { AddCategory , getAllCategory, deleteCategory , deleteAllCategory} from '../Controllers/Category.Controllers.js'

const router = Router()

router.post("/add" , AddCategory)
router.get("/get-all-category" , getAllCategory)
router.delete("/delete" , deleteCategory)
router.delete("/delete/all" , deleteAllCategory)

export default router