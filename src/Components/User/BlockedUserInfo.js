import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { BASE_URL } from "../Services/Helper";
import Spin from "../Spin";
import BlockedUser from "./BlockedUser";
import InfoNavBar from "./InfoNavBar";

const BlocekdUserInfo=()=>{
    useEffect(()=>{
        document.title="All Blocked Users";
    },[])
    const [loading,setLoading] = useState(false);
    const getAllBlockedUsersFromServer = () =>{
        setLoading(true);
        axios.get(`${BASE_URL}/blockedUser`).then(
            (response)=>{
                console.log(response.data);
                toast.success("Blocked users have been loaded")
                setBlockedUsers(response.data);
                setLoading(false);
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
            {loading && <Spin/>}
            {
                blockedUsers.length>0 ? blockedUsers.map((item)=><BlockedUser key={item.id} blockedUser = {item}/>):"No Blocked users"
            }
        </div>
    )
}

export default BlocekdUserInfo;