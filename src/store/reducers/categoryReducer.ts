import { CategoryAction, CategoryState } from "../../types/category";


const defaultState: CategoryState = {
       data: [],
       loading: false,
       error: ""
}

const categoryReducer = (state: CategoryState = defaultState, action: CategoryAction)=>{
    switch(action.type){
       case 'GET_CATEGORIES_START':
           return{
               ...state,loading:false, error: ""
           }

        case 'GET_CATEGORIES_SUCCESS':
            return{
                ...state, data:action.payload, loading:false   
            }   
        case 'GET_CATEGORIES_ERROR':
            return{
                ...state, error:"Hata aldık", loading :false
            }  
        case 'ADD_CATEGORY_START':
            return{
                ...state,loading:false, error: ""
            } 
        case 'ADD_CATEGORY_SUCCESS':
            return{
                ...state, data:[action.payload, ...state.data], loading:false   
            } 
        case 'ADD_CATEGORY_ERROR':
            return{
                ...state, error:"Hata aldık", loading :false
            }
        case 'UPDATE_CATEGORY_START':        
            return{
                ...state,loading:false, error: ""
            }
        case 'ADD_CATEGORY_SUCCESS':
            return{
                ...state, data: state.data.map(category=>category.id === action.payload.id 
                    ? action.payload
                    : category) 
                    , loading:false  
            } 
        case 'UPDATE_CATEGORY_ERROR':
            return{
                ...state, error:"Hata aldık", loading :false
            } 
            
        case  'DELETE_CATEGORY_START':
            return{
                ...state,loading:false, error: ""
            } 
        case  'DELETE_CATEGORY_SUCCESS':
            return{
                ...state,data:state.data.filter(category=>category.id !==action.payload),loading:false
            } 
        case  'DELETE_CATEGORY_ERROR':
            return{
                ...state, error:"Hata aldık", loading :false
            }            
            default:
                return state
    }

}

export default categoryReducer;