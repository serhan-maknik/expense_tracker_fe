import { ApartmentOutlined, ApiFilled } from "@ant-design/icons";
import { Record, RecordDispatch, RecordForm } from "../../types/record";
import api from "../../utils/api";

export const getRecords =() =>(dispatch:RecordDispatch)=>{
    dispatch({type:'GET_RECORDS_START'})
    api().get<Record[]>("/records")
    .then(respons=>{
        dispatch({type:'GET_RECORDS_SUCCESS', payload:respons.data})
    }).catch(()=>{
        dispatch({type:'GET_RECORDS_ERROR'})
    })
}

export const addRecord = (form:RecordForm) => (dispatch:RecordDispatch)=>{
    dispatch({type:'ADD_RECORD_START'})
    api().post<Record>("/records",form)
    .then(response=>{
        dispatch({type:'ADD_RECORD_SUCCESS',payload:response.data})
    }).catch(()=>{
        dispatch({type:'ADD_RECORD_ERROR'})
    })
    
}

export const updateRecord =(form: RecordForm, id:Record['id']) =>(dispatch:RecordDispatch)=>{
    dispatch({type: 'UPDATE_RECORD_START'})
    api().put<Record>("/records/"+id)
    .then(response=>{
        dispatch({type:'UPDATE_RECORD_SUCCESS',payload:response.data})
    }).catch(()=>dispatch({type:'UPDATE_RECORD_ERROR'}))
}

export const deleteRecord =(id:Record['id']) =>(dispatch:RecordDispatch)=>{
    dispatch({type: 'DELETE_RECORD_START'})
    api().delete("/records/"+id)
    .then(()=>{
        dispatch({type:'DELETE_RECORD_SUCCESS',payload:id})
    }).catch(()=>{
        dispatch({type:'DELETE_RECORD_ERROR'})
    })
}