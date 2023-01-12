import React from "react";
import { Button, Container, Table } from "reactstrap";
import axios from "axios";
import { BASE_URL } from "./Services/Helper";
import { toast } from "react-toastify";

const AdminProd = ({prod}) =>{
    const deleteProd=(prodId)=>{
        axios.delete(`${BASE_URL}/products/deleteProd/${prodId}`).then(
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
                            <th scope="row">{prod.prodId}</th>
                            <td>{prod.prodName}</td>
                            <td>Mfg.Date {prod.manDate}</td>
                            <td>Exp.Date {prod.expDaste}</td>
                            <td>Rs: {prod.price}/piece</td>
                            <Button  className=" mr-5"outline onClick={()=>{deleteProd(prod.prodId);}}>Delete</Button>
                        </tr>
                        
                    </tbody>
                    
                </Table>
                
            </Container>
        </div>
    );
}

export default AdminProd;