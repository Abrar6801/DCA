import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";  
import { BASE_URL } from "../Services/Helper";
import UserNavBar from "../User/UserNavBar";
import Product from "./Product";



const ProductInfo=()=>{
    useEffect(()=>{
        document.title="All Products";
    },[])

    const getAllProductsFromServer = () =>{
        axios.get(`${BASE_URL}/products`).then(
            (response) => {
                console.log(response.data);
                setProducts(response.data);
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

    const updateProductById=(id)=>{
        setProducts(products.filter((c)=>c.id!=id));
    }
    return(
        <div>
            <UserNavBar/><br/>
            {
                products.length>0 ? products.map((item)=><Product key={item.id} product={item} update={updateProductById}/>):"No Products"
            }
        </div>
    )
}

export default ProductInfo;