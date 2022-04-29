import { Category, CategoryDispatch, CategoryForm } from "../../types/category";
import api from "../../utils/api";

export const getCategories =() => (dispatch: CategoryDispatch)=>{

    dispatch({type: 'GET_CATEGORIES_START'})

    api().get<Category[]>("/categories")
    .then(response =>{
       dispatch({type: "GET_CATEGORIES_SUCCESS", payload: response.data})
    }).catch(() =>{
        dispatch({type: "GET_CATEGORIES_ERROR"})
    })

}

export const addCategory = (form : CategoryForm) => (dispatch:CategoryDispatch)=>{
    dispatch({type: 'ADD_CATEGORY_START'})

    api().post<Category>("/categories", form)
    .then(response =>{
        dispatch({type: "ADD_CATEGORY_START", payload:response.data})
    }).catch(error=>{
        dispatch({type: "ADD_CATEGORY_ERROR"})
    })
}

export const updateCategory =(form: Partial<CategoryForm>, id :number) => (dispatch:CategoryDispatch)=>{
    dispatch({type: 'UPDATE_CATEGORY_START'})
    
    api().put<Category>("categoris/"+id, form)
    .then(response=>{
        dispatch({type:'UPDATE_CATEGORY_SUCCESS',payload:response.data})
    }).catch(error=>{
        dispatch({type: "UPDATE_CATEGORY_ERROR"})
    })

} 

export const deleteCategory =(id :number) =>(dispatch:CategoryDispatch) =>{
    dispatch({type:'DELETE_CATEGORY_START'})
     api().delete("/categories"+id)
     .then(response=>{
        dispatch({type:'DELETE_CATEGORY_SUCCESS',payload:id})
     }).catch(error=>{
        dispatch({type: "DELETE_CATEGORY_ERROR"})
    })
}