import React, { useState } from "react";
import { Button,Container, Table } from "reactstrap";
import axios from "axios";
import { BASE_URL } from "./Services/Helper";
import { toast } from "react-toastify";
import InfoNavBar from "./InfoNavBar";




const Rep=({rep,update})=>{
    const deleteRep=(repId)=>{
        axios.delete(`${BASE_URL}/reps/deleteRep/${repId}`).then(
            (response)=>{
                toast.success("deleted");
                update(repId);
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
                        <th scope="row">{rep.repId}</th>
                        <td>{rep.name}</td>
                        <td>{rep.position}</td>
                        <td>{rep.email}</td>
                        <td>{rep.phNo}</td>
                        <Button color="dark" className="float-right mt-1"outline onClick={()=>{deleteRep(rep.repId);}}>Delete</Button>
                    </tr>
                    
                </tbody>
                
            </Table>
        </Container>
    </div>);
}

export default Rep;