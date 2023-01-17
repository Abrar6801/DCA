import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { BASE_URL } from "../Services/Helper";
import InfoNavBar from "../User/InfoNavBar";
import Rep from "./Rep";
import Spin from "../Spin";

const RepInfo=()=>{
    useEffect(()=>{
        document.title = "All Reps";
    },[])
    const [loading,setLoading] = useState(false);
    const getAllRepsFromServer = () =>{
        setLoading(true);
        axios.get(`${BASE_URL}/representatives`).then(
            (response) => {
                toast.success("Reps have been loaded")
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
            <InfoNavBar/><br></br>
            {loading && <Spin/>}
            {
                reps.length>0 ? reps.map((item)=><Rep key={item.id} rep = {item}/>):"No Reps"
            }
        </div>
    )
}

export default RepInfo;