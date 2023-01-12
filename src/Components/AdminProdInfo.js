import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Container, Table } from "reactstrap";
import AdminProd from "./AdminProd";
import InfoNavBar from "./InfoNavBar";
import Prod from "./Prod";
import { BASE_URL } from "./Services/Helper";
import UserNavBar from "./UserNavBar";


const AdminProdInfo=()=>{
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
            <InfoNavBar/><br/>
            <Container>
                {/* <Table dark hover striped className="mt-5">
                    <thead>
                        <tr>
                            <th scope="row">Product Id</th>
                            <td>Product Name</td>
                            <td>Man Date</td>
                            <td>Exp Date</td>
                            <td>Price</td>
                        </tr>
                    </thead>
                </Table> */}
            </Container>
            {
                products.length>0 ? products.map((item)=><AdminProd key={item.id} prod={item} update={updateProductById}/>):"No Products"
            }
        </div>
    )
}

export default AdminProdInfo;