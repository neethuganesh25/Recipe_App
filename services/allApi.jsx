import { commonApi } from "./commonApi"
import { serverUrl } from "./serverUrl"

//api to add recipe
export const addRecipeApi=async(reqBody)=>{
   return await commonApi('POST',`${serverUrl}/recipe`,reqBody)
}

//api to get all recipe
export const getRecipeApi=async()=>{
   return await commonApi('GET',`${serverUrl}/recipe`,"")
}
//api to delete a recipe

export const deleteRecipeApi=async(id)=>{
   return await commonApi('DELETE',`${serverUrl}/recipe/${id}`,{})
}

//api to add category
export const addCategoryApi=async(reqBody)=>{
   return await commonApi('POST',`${serverUrl}/category`,reqBody)
}

//to get all category from 
export  const allCategoryApi=async()=>{
   return await commonApi('GET',`${serverUrl}/category`,"")
}

//to delete a category
export const deleteCategoryApi=async(id)=>{
   return await commonApi('DELETE',`${serverUrl}/category/${id}`,{})
}

//api to get a RecipeDetails
export const getARecipeApi=async(id)=>{
   return await commonApi('GET',`${serverUrl}/recipe/${id}`,{})
}

//api to update RecipeDetails
export const updateRecipeApi=async(id,reqBody)=>{
   return await commonApi('PUT',`${serverUrl}/recipe/${id}`,reqBody)

}


// API to add feedback
export const addFeedbackApi = async (reqBody) => {
   return await commonApi('POST', `${serverUrl}/feedbacks`, reqBody);
 };
 
 // API to get all feedback
 export const getFeedbackApi = async () => {
   return await commonApi('GET', `${serverUrl}/feedbacks`, "");
 };
 
 // API to delete feedback
 export const deleteFeedbackApi = async (id) => {
   return await commonApi('DELETE', `${serverUrl}/feedbacks/${id}`, {});
 };

