import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { BASE_URL } from "../Services/Helper";
import Spin from "../Spin";
import InfoNavBar from "./InfoNavBar";


import User from "./User";



const UserInfo=()=>{
    useEffect(()=>{
        document.title = "All Users";
    },[])
    const [loading,setLoading] = useState(false);
    const getAllUsersFromServer = () =>{
        setLoading(true);
        axios.get(`${BASE_URL}/users`).then(
            (response) => {
                toast.success("Userss have been loaded")
                setUsers(response.data);
                setLoading(false);
            },
            (error) => {
                toast.error("something went wrong")
            }
        );
    };
    useEffect(()=>{
        getAllUsersFromServer();
    },[]);
    const [users,setUsers] = useState([]);


    return(
        <div>
            <InfoNavBar/><br/>
            {loading && <Spin/>}
            {
                users.length>0 ? users.map((item)=><User key={item.id} user = {item} />):"No users"
            }

             
            
            
        </div>
    )
}

export default UserInfo;