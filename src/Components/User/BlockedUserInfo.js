import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Container } from "reactstrap";

import { BASE_URL } from "../Services/Helper";
import BlockedUser from "./BlockedUser";
import InfoNavBar from "./InfoNavBar";

const BlocekdUserInfo=()=>{
    useEffect(()=>{
        document.title="All Users";
    },[])

    const getAllBlockedUsersFromServer = () =>{
        axios.get(`${BASE_URL}/blockedUser`).then(
            (response)=>{
                console.log(response.data);
                toast.success("Blocked users have been loaded")
                setBlockedUsers(response.data);
            },
            (error)=>{
                console.log(error);
                toast.error("something went wrong")
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
                    blockedUsers.length>0 ? blockedUsers.map((item)=><BlockedUser key={item.id} blockedUser = {item}/>):"No Blocked users"
                }
            </Container>
        </div>
    )
}

export default BlocekdUserInfo;