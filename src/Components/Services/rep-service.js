import { myAxios } from "./Helper";

export const repAdd=(rep)=>{
    return myAxios.post('/reps/addRep',rep).then((response)=>response.data);
}
