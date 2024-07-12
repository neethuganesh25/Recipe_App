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