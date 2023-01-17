import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";  
import { BASE_URL } from "../Services/Helper";
import UserNavBar from "../User/UserNavBar";
import Product from "./Product";
import Spin from "../Spin";


const ProductInfo=()=>{
    useEffect(()=>{
        document.title="All Products";
    },[])
    const [loading,setLoading] = useState(false);
    const getAllProductsFromServer = () =>{
        setLoading(true);
        axios.get(`${BASE_URL}/products`).then(
            (response) => {
                console.log(response.data);
                setProducts(response.data);
                setLoading(false);
            },
            (error) => {
                console.log(error);
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
            <UserNavBar/><br/>
            {loading && <Spin/>}
            {
                products.length>0 ? products.map((item)=><Product key={item.id} product={item}/>):"No Products"
            }
        </div>
    )
}

export default ProductInfo;