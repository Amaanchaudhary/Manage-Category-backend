import mongoose, { Schema } from "mongoose";

const Category = new Schema({
    categoryName : {
        type : String,
        required : true,
    },
    categoryDescription: {
        type: String,
        required : true,
    },
    categoryColor : {
        type : String,
        enum : ['red', 'blue', 'green', 'black'],
        default : "black"
    },
    categoryImage : {
        type : String,
        required : true,
    },
    checked : {
        type : Boolean,
        default : false
    }
})

export default mongoose.model('categories' , Category)