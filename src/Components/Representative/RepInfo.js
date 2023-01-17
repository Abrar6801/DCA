import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { Container, Table } from "reactstrap";
import { BASE_URL } from "../Services/Helper";
import InfoNavBar from "../User/InfoNavBar";
import Rep from "./Rep";
import Spinner from "reactstrap";
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
                console.log(response.data);
                toast.success("Reps have been loaded")
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
            <InfoNavBar/><br></br>
            {loading && <Spin/>}
            {
                reps.length>0 ? reps.map((item)=><Rep key={item.id} rep = {item} update={updateRepById}/>):"No Reps"
            }
        </div>
    )
}

export default RepInfo;