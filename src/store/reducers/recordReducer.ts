import { RecordAction, RecordState } from "../../types/record";

const defaultState: RecordState ={
    data:[],
    loading:false,
    error: ""
}

const recordReducer =(state:RecordState=defaultState, actions:RecordAction):RecordState=>{

     switch(actions.type){
       
        case'GET_RECORDS_START':

            return{
                ...state,loading:true,error:""
            }
        case 'GET_RECORDS_SUCCESS':
            return{
                ...state,loading:false, data:actions.payload
            }
        case 'GET_RECORDS_ERROR':
            return{
                ...state,loading:false, error:"HATA ALDIK LA"
            } 
            
        case'ADD_RECORD_START':

        return{
            ...state,loading:true,error:""
        }
        case 'ADD_RECORD_SUCCESS':
            return{
                ...state,loading:false, data:[actions.payload,...state.data]
            }
        case 'ADD_RECORD_ERROR':
            return{
                ...state,loading:false, error:"HATA ALDIK LA"
            } 
        case'UPDATE_RECORD_START':

            return{
                ...state,loading:true,error:""
            }
        case 'UPDATE_RECORD_SUCCESS':
            return{
                ...state,loading:false, data: state.data.map((record)=>record.id === actions.payload.id
                                                                                  ? actions.payload
                                                                                  : record)
            }
        case 'UPDATE_RECORD_ERROR':
            return{
                ...state,loading:false, error:"HATA ALDIK LA"
            } 
            
        case'DELETE_RECORD_START':

            return{
                ...state,loading:true,error:""
            }
        case 'DELETE_RECORD_SUCCESS':
            return{
                ...state,loading:false, data:state.data.filter(record=>record.id !== actions.payload)
            }
        case 'DELETE_RECORD_ERROR':
            return{
                ...state,loading:false, error:"HATA ALDIK LA"
            }              
        default:return state
     }
}

export default recordReducer;