import React, {  useState } from "react";
import { Button, Card, CardBody, CardHeader, Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { signUp } from "./Services/user-service";
import { toast } from "react-toastify";
import "./global.css"
import NavBar from "./NavBar";


const SignUp =()=>{
    const [data,setData] = useState({
        businessName:'',
        ownerName:'',
        drugLicenceicence:'',
        gst:'',
        phoneNumber:'',
        password:''
    })

    const [error,setError] = useState(false)


    const handleChange=(event,property)=>{
        setData({...data,[property]:event.target.value})
    }

    const resetData=()=>{
        setData({
            businessName:'',
            ownerName:'',
            drugLicenceicence:'',
            gst:'',
            phoneNumber:'',
            password:''
        })
    }

    const submitForm=(event)=>{
        event.preventDefault();
        if(data.businessName.length===0 || data.ownerName.length===0 || data.drugLicence.length===0 || data.gst.length!==15 || 
            data.phoneNumber.length===0 || data.phoneNumber<6000000000 || data.password.length<=4 || 
            data.password.length===0){
            setError(true);
        }else{
        setError(false);
        signUp(data).then((resp)=>{
            toast.success("Registration Sucessful!!")
            setData({
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
    return <div>
        <NavBar/>
        <Container>
            <Row className="mt-5">
                <Col sm={{size: 6,offset:3}}>
                <Card color="dark" outline>
                <CardHeader >
                    Registration Form
                </CardHeader>
                <CardBody>
                    <Form onSubmit={submitForm}>
                        <FormGroup>
                            <h6 for="businessName">Business Name</h6>
                            <Input type="text" placeholder="Business name" onChange={(e)=>handleChange(e,'businessName')} value={data.businessName}/>
                            {error&&data.businessName.length===0 ?
                            <Label>Business name cannot be empty</Label>:""}
                        </FormGroup>
                        <FormGroup>
                            <h6 for="ownerName">Owners Name</h6><Input type="text" placeholder="Owners name" 
                            onChange={(e)=>handleChange(e,'ownerName')} value={data.ownerName}/>
                            {error&&data.ownerName.length===0 ?
                            <Label>Owner name cannot be empty</Label>:""}
                        </FormGroup>
                        <FormGroup>
                            <h6 for="drugLicence">Drug Licence</h6>
                            <Input type="text" placeholder="Licence number" onChange={(e)=>handleChange(e,'drugLicence')} value={data.drugLicence}/>
                            {error&&data.drugLicence.length===0 ?
                            <Label>Drug licance cannot be empty</Label>:""}
                        </FormGroup>
                        <FormGroup>
                            <h6 for="gst">gst</h6><Input type="text" placeholder="gst number" onChange={(e)=>handleChange(e,'gst')} value={data.gst}/>
                            {error&&data.gst.length!==15 ?
                            <Label>Enter valid gst number</Label>:""}
                        </FormGroup>
                        <FormGroup>
                            <h6 for="phoneNumber">Phone number</h6><Input type="number" placeholder="Phone number" onChange={(e)=>handleChange(e,'phoneNumber')} value={data.phoneNumber}/>
                            {error&&(data.phoneNumber.length!==10||data.phoneNumber<6000000000)?
                            <Label>Enter valid Phone number</Label>:""}
                            
                        </FormGroup>
                        <FormGroup>
                            <h6 for="password">password</h6><Input type="text" placeholder="password" onChange={(e)=>handleChange(e,'password')} value={data.password}/>
                            {error&&data.password.length===0 ?
                            <Label>password cannot be empty</Label>:""}
                            {error&&data.password.length<=4 ? <Label>password should be greater than four charecters</Label>:""}
                        </FormGroup>
                        <Container>
                            <Button color="dark" type="submit">Register</Button>
                            <Button onClick={resetData} color="secondary" className="ms-2" type="reset">Reset</Button>
                        </Container>
                    </Form>
                </CardBody>
            </Card>
                </Col>
            </Row>
        </Container>
    </div>
}

export default SignUp;