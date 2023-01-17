import React, { useState } from "react";
import { Button,Container, Table } from "reactstrap";
import axios from "axios";

import { toast } from "react-toastify";
import { BASE_URL } from "../Services/Helper";





const Rep=({rep,update})=>{
    const deleteRep=(representativeId)=>{
        axios.delete(`${BASE_URL}/representatives/deleteRepresentative/${representativeId}`).then(
            (response)=>{
                toast.success("deleted");
                update(representativeId);
            },
            (error)=>{
                toast.error("Rep not deleted");
            }
        )
    }


    return(
    <div> 
        <Container>
            <Table dark hover striped>
                <tbody>
                    <tr>
                        <th scope="row">{rep.representativeId}</th>
                        <td>{rep.name}</td>
                        <td>{rep.position}</td>
                        <td>{rep.email}</td>
                        <td>{rep.phoneNumber}</td>
                        <Button color="dark" className="float-right mt-1"outline onClick={()=>{deleteRep(rep.representativeId);}}>Delete</Button>
                    </tr>
                    
                </tbody>
                
            </Table>
        </Container>
    </div>);
}

export default Rep;