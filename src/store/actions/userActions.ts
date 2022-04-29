import { type } from "os";
import { LoginForm, User, UserDispatch } from "../../types/users";
import api from "../../utils/api";

export const login = (creds: LoginForm) => async (dispatch:UserDispatch)=>{
    dispatch({type:"LOGIN_START"})

    try {
        const response = await api().post<User>("users/login",creds)
        dispatch({type: "LOGIN_SUCCESS", payload:response.data})
        localStorage.setItem("token",response.data.token)
    } catch (error) {
        dispatch({type: "LOGIN_ERROR"})
    }
}

export const isLoggedIn =()=>(dispatch:UserDispatch)=>{
    dispatch({type:'IS_LOGGED_IN_START'})
    api().post<User>('/users/is_logged_in')
    .then(response=>{
        dispatch({type:'IS_LOGGED_IN_SUCCESS', payload:response.data})
    })
}

export const logout = () => (dispatch: UserDispatch) => {
    localStorage.removeItem("token");
    dispatch({ type: "LOGOUT" });
  };