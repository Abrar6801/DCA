import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { BASE_URL } from "../Services/Helper";
import Spin from "../Spin";
import InfoNavBar from "../User/InfoNavBar";
import AdminProduct from "./AdminProduct";



const AdminProductInfo=()=>{
    useEffect(()=>{
        document.title="All Products";
    },[])
    const [loading,setLoading] = useState(false);
    const getAllProductsFromServer = () =>{
        setLoading(true);
        axios.get(`${BASE_URL}/products`).then(
            (response) => {
                setProducts(response.data);
                setLoading(false);
            },
            (error) => {
                toast.error("something went wrong");
            }
        );
    };
    useEffect(()=>{
        getAllProductsFromServer();
    },[]);
    const [products,setProducts] = useState([]);

    
    return(
        <div>
            <InfoNavBar/><br/>
            {loading && <Spin/>}
            {
                products.length>0 ? products.map((item)=><AdminProduct key={item.id} product={item}/>):"No Products"
            }
        </div>
    )
}

export default AdminProductInfo;