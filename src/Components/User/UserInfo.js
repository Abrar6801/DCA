import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Container} from "reactstrap";
import { BASE_URL } from "../Services/Helper";
import InfoNavBar from "./InfoNavBar";


import User from "./User";



const UserInfo=()=>{
    useEffect(()=>{
        document.title = "All Users";
    },[])

    const getAllUsersFromServer = () =>{
        axios.get(`${BASE_URL}/users`).then(
            (response) => {
                console.log(response.data);
                toast.success("Userss have been loaded")
                setUsers(response.data);
            },
            (error) => {
                console.log(error);
                toast.error("something went wrong")
            }
        );
    };
    useEffect(()=>{
        setLoading(true);
        getAllUsersFromServer();
        setLoading(false);
    },[]);
    const [users,setUsers] = useState([]);

    const updateUserById=(id)=>{
        setUsers(users.filter((c)=>c.id!==id));
    }
    const [loading,setLoading] = useState(false);
    return(
        <div>
            <InfoNavBar/><br/>
            <Container>
            {
                users.length>0 ? users.map((item)=><User key={item.id} user = {item} update={updateUserById}/>):"No users"
            }
            </Container>
             
            
            
        </div>
    )
}

export default UserInfo;