import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Container, Pagination, PaginationItem, PaginationLink } from "reactstrap";
import InfoNavBar from "./InfoNavBar";
import { BASE_URL } from "./Services/Helper";
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
        getAllUsersFromServer();
    },[]);
    const [users,setUsers] = useState([]);

    const updateUserById=(id)=>{
        setUsers(users.filter((c)=>c.id!==id));
    }
    return(
        <div>
            
            <InfoNavBar/><br/>
            <Container>
            {
                users.length>0 ? users.map((item)=><User key={item.id} user = {item} update={updateUserById}/>):"No courses"
            }
            </Container>
        </div>
    )
}

export default UserInfo;