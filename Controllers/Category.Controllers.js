import CategoryModel from "../Models/Category.model.js"

export const AddCategory = async (req, res) => {
    try {
        const { categoryName, categoryDescription, categoryColor, categoryImage } = req.body.newCategory
        // console.log(req.body.newCategory);
        if (!categoryName && !categoryDescription && !categoryImage) {
            res.status(401).json({ success: false, message: "Please Fill the Required fields" })
        }

        const category = new CategoryModel({
            categoryName, categoryDescription, categoryColor , categoryImage
        })

        await category.save();

        return res.status(201).json({success : true , message : "Category Added Successfully"})

    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
}

export const getAllCategory = async (req , res) => {
    try{
        const categories = await CategoryModel.find({}).select("-createdAt -updatedAt -__v")
        // console.log("All data", categories)
  
        if(categories.length){ 
          return res.status(200).json({success : true , message : "categories found" , categories})
        }
  
        return res.status(404).json({ sucess: false, message: "categories Not Found!" })
  
      }catch(error){
          return res.status(500).json({success : false , message : error.message})
      }
}

export const deleteCategory = async (req , res) => {
    try{
        const {ids} = req.query
        
        const result = await CategoryModel.deleteMany({ _id: { $in: ids } });

        if(result) return res.status(200).json({ success: true, message: "deletion successfull"})

    }catch(error){
        return res.status(500).json({success : false , message : error.message})
    }
}

export const deleteAllCategory = async (req , res) => {
    try{
        await CategoryModel.deleteMany({});

        return res.status(200).json({ success: true, message: "deletion successfull"})

    }catch(error){
        return res.status(500).json({success : false , message : error.message})
    }
}