import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Container} from "reactstrap";
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
                console.log(response.data);
                toast.success("Userss have been loaded")
                setUsers(response.data);
                setLoading(false);
            },
            (error) => {
                console.log(error);
                toast.error("something went wrong")
            }
        );
    };
    useEffect(()=>{
        getAllUsersFromServer();
    },[]);
    const [users,setUsers] = useState([]);

    const updateUserById=(id)=>{
        setUsers(users.filter((c)=>c.id!==id));
    }

    return(
        <div>
            <InfoNavBar/><br/>
            {loading && <Spin/>}
            {
                users.length>0 ? users.map((item)=><User key={item.id} user = {item} update={updateUserById}/>):"No users"
            }

             
            
            
        </div>
    )
}

export default UserInfo;