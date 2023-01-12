import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { BASE_URL } from "./Services/Helper";
import RepDisplay from "./RepDisplay";
import UserNavBar from "./UserNavBar";
import { Container, Table } from "reactstrap";

const UserRepDisplay=()=>{
    useEffect(()=>{
        document.title = "All Reps";
    },[])

    const getAllRepsFromServer = () =>{
        axios.get(`${BASE_URL}/Reps`).then(
            (response) => {
                console.log(response.data);
                setReps(response.data);
            },
            (error) => {
                console.log(error);
                toast.error("something went wrong")
            }
        );
    };
    useEffect(()=>{
        getAllRepsFromServer();
    },[]);
    const [reps,setReps] = useState([]);

    const updateRepById=(id)=>{
        setReps(reps.filter((c)=>c.id!=id));
    }
    return(
        <div>
            {/* <InfoNavBar/> */}
            <UserNavBar/><br/>
            <Container>
            {/* 
            <Table dark hover striped className="mt-5">
                <thead>
                    <tr>
                    <th scope="row">Rep Id</th>
                        <td>Name</td>
                        <td>Position</td>
                        <td>Email</td>
                        <td>PhNo</td>
                    </tr>
                </thead>
            </Table> */}
        </Container>
            {
                reps.length>0 ? reps.map((item)=><RepDisplay key={item.id} rep = {item} update={updateRepById}/>):"No Reps"
            }
        </div>
    )
}


export default UserRepDisplay;