import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
import { Button, Container, Table } from "reactstrap";
import { BASE_URL } from "./Services/Helper";

const BlockedUser=({user})=>{
    const unblockUser=(user,id)=>{
        axios.put(`${BASE_URL}/users/updateUser`,user).then(
            (response)=>{
                toast.success("Unblocked and deleted");
            },
            (error)=>{
                toast.error("Unable to unblock");
            }
        )
        axios.delete(`${BASE_URL}/blockedUser/deleteBlockedUser/${id}`).then(
            (response)=>{
                console.log("DEleted")
            },
            (error)=>{
                toast.error("Blocked user not deleted");
            }
        )
    }
    return <Container>
        <Table dark hover striped>
                <tbody>
                    <tr>
                        <th scope="row">{user.id}</th>
                        <td>{user.bname}</td>
                        <td>{user.pname}</td>
                        <td>{user.drugL}</td>
                        <td>{user.gst}</td>
                        <td>{user.phNo}</td>
                        <Button color="dark" className="float-right mt-1"outline onClick={()=>{unblockUser(user,user.id);}}>UnBlock</Button>
                    </tr>
                    
                </tbody>
                
            </Table>
    </Container>
}

export default BlockedUser;