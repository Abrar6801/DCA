import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Container } from "reactstrap";
import BlockedUser from "./BlockedUser";
import InfoNavBar from "./InfoNavBar";
import { BASE_URL } from "./Services/Helper";

const BlockedUserInfo=()=>{
    useEffect(()=>{
        document.title="Blocked Users";
    },[])

    const getAllBlockedUsersFromServer = () =>{
        axios.get(`${BASE_URL}/blockedUsers`).then(
            (response)=>{
                console.log(response.data);
                toast.success("Blocked users loaded")
                setBlockedUsers(response.data);
            },
            (error)=>{
                console.log(error);
                toast.error("something went wrong");
            }
        );
    };
    useEffect(()=>{
        getAllBlockedUsersFromServer();
    },[]);

    const [blockedUsers,setBlockedUsers] = useState([]);
    return(
        <div>
            <InfoNavBar/><br/>
            <Container>
                {
                    blockedUsers.length>0 ? blockedUsers.map((item)=><BlockedUser key={item.id} user={item} />):"No blocked users"
                }
            </Container>
        </div>
    )
}

export default BlockedUserInfo;