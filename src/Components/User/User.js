
import React from "react";
import { Button,Container, Table } from "reactstrap";
import axios from "axios";

import { toast } from "react-toastify";
import { BASE_URL } from "../Services/Helper";


const User = ({user,update}) =>{
    const deleteUser=(id)=>{
        axios.delete(`${BASE_URL}/users/deleteUser/${id}`).then(
            (response)=>{
                toast.success("deleted");
                update(id);
            },
            (error)=>{
                toast.error("user not deleted");
            }
        )
    }
    const blockUser=(user,blocked,id)=>{
        axios.put(`${BASE_URL}/users/blockkOrUnblock/${blocked}/${id}`,user).then(
            (response)=>{
                toast.success("blocked");
            }
        )
    }

    
     return <Container>
        <Table dark hover striped>
                <tbody>
                    <tr>
                        <th scope="row">{user.id}</th>
                        <td>{user.businessName}</td>
                        <td>{user.ownerName}</td>
                        <td>{user.drugLicence}</td>
                        <td>{user.gst}</td>
                        <td>{user.phoneNumber}</td>
                        <Button color="dark" className="float-right mt-1"outline onClick={()=>{deleteUser(user.id);}}>Delete</Button>
                        <Button color="dark" className="float-right mt-1"outline onClick={()=>{blockUser(user,user.blocked,user.id);}}>Block</Button>
                    </tr>
                </tbody>
                
            </Table>
    </Container>
}

export default User;