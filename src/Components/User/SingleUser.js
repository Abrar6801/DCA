import React, { useEffect, useState } from "react";
import axios from "axios";

import { toast } from "react-toastify";
import { Button, Card, CardBody, CardHeader, CardSubtitle, CardTitle, Col, Container, Form, Input, Row } from "reactstrap";
import { BASE_URL } from "../Services/Helper";
import UserNavBar from "./UserNavBar";


const SingleUser=()=>{
    const getSingleUser=()=>{
        axios.get(`${BASE_URL}/users/6`).then(
            (response)=>{
                console.log(response.data);
                
                setUser(response.data);
            },
            (error)=>{
                console.log(error);
                toast.error("user not Loaded");
            }
        )
    }

    useEffect(()=>{
        getSingleUser();
    },[]);
    const [user,setUser] = useState([]);
    

    const handleId=(e)=>{
        e.preventDefault();
        const id=e.target.id.value;
        console.log("id is:"+id)
        
    }

    return <div>
        <UserNavBar/>
        <Container>
        <Row>
        <Col md={{ span: 8, offset: 4 }}>
        <Card color="dark" inverse body
            className="text-center mt-5"
            style={{
            width: '18rem'
            }}>
        <h4>User Details</h4>
        <CardBody>
            <h6>Unique id - {user.id}</h6><br/>
            <h6>Business Name - {user.businessName}</h6><br/>
            <h6>Owner's Name - {user.ownerName}</h6><br/>
            <h6>Drug Licence id - {user.drugLicence}</h6><br/>
            <h6>GST Number - {user.gst}</h6><br/>
            <h6>Phone Number - {user.phoneNumber}</h6><br/>
            <Button className="mt-3"href="/edit" >Edit</Button>
        </CardBody>
        </Card>
        </Col>
        </Row>
        </Container>
        </div>
}

export default SingleUser;