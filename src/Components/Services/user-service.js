import { myAxios } from "./Helper";

export const signUp=(user)=>{
    return myAxios.post('/users/addUser',user).then((response)=>response.data);
}

export const updateUser=(users)=>{
    return myAxios.put(`/users/updateUser`,users).then((response)=>response.data);
}
