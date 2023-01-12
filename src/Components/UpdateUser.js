import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Button, Card, CardBody, CardHeader, Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { updateUser } from "./Services/user-service";

const UpdateUser=()=>{
    const [data,setData] = useState({
        id:'',
        bname:'',
        pname:'',
        drugL:'',
        gst:'',
        phNo:'',
        password:''
    })

    const [error,setError] = useState(false)

    useEffect(()=>{
    },data)

    const handleUpdate=(event,property)=>{
        setData({...data,[property]:event.target.value})
    }

    const resetData=()=>{
        setData({
            id:'',
            bname:'',
            pname:'',
            drugL:'',
            gst:'',
            phNo:'',
            password:''
        })
    }

    const submitUpdate=(event)=>{
        event.preventDefault();
        if(data.id.length==0 || data.bname.length==0 || data.pname.length==0 || data.drugL.length==0 || data.gst.length!=15 || data.phNo.length==0 || data.password.length==0){
            setError(true);
        }
        else{
            setError(false);
            console.log(data);
            updateUser(data).then((resp)=>{
                console.log(resp);
                console.log("Updated")
                toast.success("Updated")
                setData({
                    id:'',
                    bname:'',
                    pname:'',
                    drugL:'',
                    gst:'',
                    phNo:'',
                    password:''
                })
                }).catch((error)=>{
            console.log(error);
            console.log("Error log");
            })
        }
    }
    return(
    <div>
        <Container>
            <Row className="mt-3">
                <Col sm={{size:6,offset:3}}>
                    <Card color="dark" outline>
                        <CardHeader>
                            Edit
                        </CardHeader>
                        <CardBody>
                            <Form >
                                <FormGroup>
                                    <h6 for="User id">Unique Id</h6>
                                    <Input type="text" placeholder="Unique Id" onChange={(e)=>handleUpdate(e,'id')} value={data.id}></Input>
                                    {error&&data.id.length==0 ?
                                    <Label>Unique id cannot be empty</Label>:""}
                                </FormGroup>
                                <FormGroup>
                                    <h6 for="bname">Business Name</h6>
                                    <Input type="text" placeholder="Business name" onChange={(e)=>handleUpdate(e,'bname')} value={data.bname}/>
                                    {error&&data.pname.length==0 ?
                                    <Label>Owner name cannot be empty</Label>:""}
                        </FormGroup>
                        <FormGroup>
                            <h6 for="pname">Owners Name</h6><Input type="text" placeholder="Owners name" onChange={(e)=>handleUpdate(e,'pname')} value={data.pname}/>
                            {error&&data.pname.length==0 ?
                            <Label>Owner name cannot be empty</Label>:""}
                        </FormGroup>
                        <FormGroup>
                            <h6 for="drugL">Drug Licence</h6>
                            <Input type="text" placeholder="Licence number" onChange={(e)=>handleUpdate(e,'drugL')} value={data.drugL}/>
                            {error&&data.drugL.length==0 ?
                            <Label>Drug licance cannot be empty</Label>:""}
                        </FormGroup>
                        <FormGroup>
                            <h6 for="gst">GST</h6><Input type="text" placeholder="GST number" onChange={(e)=>handleUpdate(e,'gst')} value={data.gst}/>
                            {error&&data.gst.length!=15 ?
                            <Label>Enter valid GST number</Label>:""}
                        </FormGroup>
                        <FormGroup>
                            <h6 for="phNo">Phone number</h6><Input type="number" placeholder="Phone number" onChange={(e)=>handleUpdate(e,'phNo')} value={data.phNo}/>
                            {error&&data.phNo.length!=10 ?
                            <Label>Enter valid Phone number</Label>:""}
                        </FormGroup>
                        <FormGroup>
                            <h6 for="password">Password</h6><Input type="text" placeholder="Password" onChange={(e)=>handleUpdate(e,'password')} value={data.password}/>
                            {error&&data.password.length==0 ?
                            <Label>Password cannot be empty</Label>:""}
                        </FormGroup>
                            </Form>
                        </CardBody>
                        
                        <Button color="dark" outline onClick={submitUpdate} href="/singleUser">Update</Button>
                        
                    </Card>
                </Col>
            </Row>
        </Container>
    </div>);
}

export default UpdateUser;