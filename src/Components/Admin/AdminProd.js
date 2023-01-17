import React from "react";
import { Button, Container, Table } from "reactstrap";
import axios from "axios";

import { toast } from "react-toastify";
import { BASE_URL } from "../Services/Helper";

const AdminProd = ({prod}) =>{
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
                            <th scope="row">{prod.productId}</th>
                            <td>{prod.productName}</td>
                            <td>Mfg.Date {prod.manufacturingDate}</td>
                            <td>Exp.Date {prod.expDaste}</td>
                            <td>Rs: {prod.price}/piece</td>
                            <Button  className=" mr-5"outline onClick={()=>{deleteProd(prod.productId);}}>Delete</Button>
                        </tr>
                        
                    </tbody>
                    
                </Table>
                
            </Container>
        </div>
    );
}

export default AdminProd;