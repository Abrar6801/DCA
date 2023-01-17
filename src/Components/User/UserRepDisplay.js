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
                setReps(response.data);
                setLoading(false);
            },
            (error) => {
                toast.error("something went wrong")
            }
        );
    };
    useEffect(()=>{
        getAllRepsFromServer();
    },[]);
    const [reps,setReps] = useState([]);

    return(
        <div>
            <UserNavBar/><br/>
            {loading && <Spin/>}
            {
                reps.length>0 ? reps.map((item)=><RepDisplay key={item.id} rep = {item} />):"No Reps"
            }
        </div>
    )
}


export default UserRepDisplay;