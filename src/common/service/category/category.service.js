import categoryModel from "../../db/model/category/category.model.js";

export async function createcategoryService(data) {
    try {
        const category = await categoryModel.create(data)
        return category
    } catch (error) {
        console.log(error.message);
        throw error
    }
}