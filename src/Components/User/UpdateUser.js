import React, {  useState } from "react";
import { toast } from "react-toastify";
import { Button, Card, CardBody, CardHeader, Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { updateUser } from "../Services/user-service";


const UpdateUser=()=>{
    const [data,setData] = useState({
        id:'',
        businessName:'',
        ownerName:'',
        drugLicence:'',
        gst:'',
        phoneNumber:'',
        password:''
    })

    const [error,setError] = useState(false)

    const handleUpdate=(event,property)=>{
        setData({...data,[property]:event.target.value})
    }


    const submitUpdate=(event)=>{
        event.preventDefault();
        if(data.id.length===0 || data.businessName.length===0 || data.ownerName.length===0 || data.drugLicence.length===0 || data.gst.length!==15 || data.phoneNumber.length===0 || data.password.length===0){
            setError(true);
        }
        else{
            setError(false);
            updateUser(data).then((resp)=>{
                console.log("Updated")
                toast.success("Updated")
                setData({
                    id:'',
                    businessName:'',
                    ownerName:'',
                    drugLicence:'',
                    gst:'',
                    phoneNumber:'',
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
                                    {error&&data.id.length===0 ?
                                    <Label>Unique id cannot be empty</Label>:""}
                                </FormGroup>
                                <FormGroup>
                                    <h6 for="businessName">Business Name</h6>
                                    <Input type="text" placeholder="Business name" onChange={(e)=>handleUpdate(e,'businessName')} value={data.businessName}/>
                                    {error&&data.ownerName.length===0 ?
                                    <Label>Owner name cannot be empty</Label>:""}
                        </FormGroup>
                        <FormGroup>
                            <h6 for="ownerName">Owners Name</h6><Input type="text" placeholder="Owners name" onChange={(e)=>handleUpdate(e,'ownerName')} value={data.ownerName}/>
                            {error&&data.ownerName.length===0 ?
                            <Label>Owner name cannot be empty</Label>:""}
                        </FormGroup>
                        <FormGroup>
                            <h6 for="drugLicence">Drug Licence</h6>
                            <Input type="text" placeholder="Licence number" onChange={(e)=>handleUpdate(e,'drugLicence')} value={data.drugLicence}/>
                            {error&&data.drugLicence.length===0 ?
                            <Label>Drug licance cannot be empty</Label>:""}
                        </FormGroup>
                        <FormGroup>
                            <h6 for="gst">gst</h6><Input type="text" placeholder="gst number" onChange={(e)=>handleUpdate(e,'gst')} value={data.gst}/>
                            {error&&data.gst.length!==15 ?
                            <Label>Enter valid gst number</Label>:""}
                        </FormGroup>
                        <FormGroup>
                            <h6 for="phoneNumber">Phone number</h6><Input type="number" placeholder="Phone number" onChange={(e)=>handleUpdate(e,'phoneNumber')} value={data.phoneNumber}/>
                            {error&&data.phoneNumber.length!==10 ?
                            <Label>Enter valid Phone number</Label>:""}
                        </FormGroup>
                        <FormGroup>
                            <h6 for="password">password</h6><Input type="text" placeholder="password" onChange={(e)=>handleUpdate(e,'password')} value={data.password}/>
                            {error&&data.password.length===0 ?
                            <Label>password cannot be empty</Label>:""}
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