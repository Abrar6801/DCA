
import React from "react";
import { Card,CardText,CardBody,CardTitle,CardSubtitle,Button,Container, Table, Pagination, PaginationItem, PaginationLink } from "reactstrap";
import axios from "axios";
import { BASE_URL } from "./Services/Helper";
import { toast } from "react-toastify";


const User = ({user,update}) =>{
    const deleteUser=(id)=>{
        axios.delete(`${BASE_URL}/users/deleteUsers/${id}`).then(
            (response)=>{
                toast.success("deleted");
                update(id);
            },
            (error)=>{
                toast.error("user not deleted");
            }
        )
    }
    const blockUser=(user,id)=>{
        axios.put(`${BASE_URL}/blokcedUser/updateBlockUser`,user).then(
            (response)=>{
                toast.success("blocked and deleted");
            },
            (error)=>{
                toast.error("user not blocked");
            }
        )
        axios.delete(`${BASE_URL}/users/deleteUsers/${id}`).then(
            (response)=>{
                console.log("deleted");
                update(id);
            },
            (error)=>{
                toast.error("user not deleted");
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
                        <Button color="dark" className="float-right mt-1"outline onClick={()=>{deleteUser(user.id);}}>Delete</Button>
                        <Button color="dark" className="float-right mt-1"outline onClick={()=>{blockUser(user,user.id);}}>Block</Button>
                    </tr>
                    
                </tbody>
                
            </Table>
    </Container>
}

export default User;