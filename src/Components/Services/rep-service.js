import { myAxios } from "./Helper";

export const repAdd=(rep)=>{
    return myAxios.post('/representatives/addRepresentative',rep).then((response)=>response.data);
}
