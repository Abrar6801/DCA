import { myAxios } from "./Helper";

export const prodAdd=(prod)=>{
    return myAxios.post('/products/addProduct',prod).then((response)=>response.data);
}