import React from "react";
import { Button, Container, Table } from "reactstrap";
import axios from "axios";

import { toast } from "react-toastify";
import { BASE_URL } from "../Services/Helper";

const AdminProduct = ({product}) =>{
    const deleteProd=(productId)=>{
        axios.delete(`${BASE_URL}/products/deleteProduct/${productId}`).then(
            (response)=>{
                toast.success("deleted");
            },
            (error)=>{
                toast.error("Product not deleted");
            }
        )
    }
    return(
        <div>
            <Container>
                <Table dark hover striped>
                    <tbody>
                        <tr>
                        <th scope="row">{product.productId}</th>
                            <td>{product.productName}</td>
                            <td>Mfg.Date {product.manufacturingDate}</td>
                            <td>Exp.Date {product.expireDate}</td>
                            <td>Rs: {product.price}/piece</td>
                            <Button  className=" mr-5"outline onClick={()=>{deleteProd(product.productId);}}>Delete</Button>
                        </tr>
                        
                    </tbody>
                    
                </Table>
                
            </Container>
        </div>
    );
}

export default AdminProduct;