import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
import { Button, Container, Table } from "reactstrap";
import { BASE_URL } from "../Services/Helper";

const BlockedUser = ({blockedUser})=>{
    const unblockUser=(blockedUser,blocked,id)=>{
        axios.put(`${BASE_URL}/users/blockkOrUnblock/${blocked}/${id}`,blockedUser).then(
            (response)=>{
                toast.success("unblocked");
            },
            (error)=>{
                toast.error("user not unblocked");
            }
        )
    }
    return <Container>
        <Table dark hover striped>
            <tbody>
                <tr>
                    <th scope="row">{blockedUser.id}</th>
                    <td>{blockedUser.businessName}</td>
                    <td>{blockedUser.ownerName}</td>
                    <td>{blockedUser.drugLicence}</td>
                    <td>{blockedUser.gst}</td>
                    <td>{blockedUser.phoneNumber}</td>
                    <Button color="dark" className="float-right mt-1" outline onClick={()=>{unblockUser(blockedUser,blockedUser.blocked,blockedUser.id);}}>Unblock</Button>
                </tr>
            </tbody>
        </Table>
    </Container>
}

export default BlockedUser;