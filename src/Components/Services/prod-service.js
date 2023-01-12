import { myAxios } from "./Helper";

export const prodAdd=(prod)=>{
    return myAxios.post('/products/addProd',prod).then((response)=>response.data);
}