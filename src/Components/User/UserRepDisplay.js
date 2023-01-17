import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { BASE_URL } from "../Services/Helper";
import RepDisplay from "../Representative/RepDisplay";
import UserNavBar from "./UserNavBar";
import Spin from "../Spin";

const UserRepDisplay=()=>{
    useEffect(()=>{
        document.title = "All Reps";
    },[])
    const [loading,setLoading] = useState(false);
    const getAllRepsFromServer = () =>{
        setLoading(true);
        axios.get(`${BASE_URL}/representatives`).then(
            (response) => {
                console.log(response.data);
                setReps(response.data);
                setLoading(false);
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
            <UserNavBar/><br/>
            {loading && <Spin/>}
            {
                reps.length>0 ? reps.map((item)=><RepDisplay key={item.id} rep = {item} update={updateRepById}/>):"No Reps"
            }
        </div>
    )
}


export default UserRepDisplay;