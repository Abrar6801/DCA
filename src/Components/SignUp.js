import React, { useEffect, useState } from "react";
import { Button, Card, CardBody, CardHeader, Col, Container, Form, FormFeedback, FormGroup, Input, Label, Row } from "reactstrap";
import NavBar from "./NavBar";
import { signUp } from "./Services/user-service";
import { toast } from "react-toastify";
import "./global.css"


const SignUp =()=>{
    const [data,setData] = useState({
        bname:'',
        pname:'',
        drugL:'',
        gst:'',
        phNo:'',
        password:''
    })

    const [error,setError] = useState(false)

    useEffect(()=>{
    },[data])

    const handleChange=(event,property)=>{
        setData({...data,[property]:event.target.value})
    }

    const resetData=()=>{
        setData({
            bname:'',
            pname:'',
            drugL:'',
            gst:'',
            phNo:'',
            password:''
        })
    }

    const submitForm=(event)=>{
        event.preventDefault();
        if(data.bname.length==0 || data.pname.length==0 || data.drugL.length==0 || data.gst.length!=15 || data.phNo.length==0 || data.password.length==0){
            setError(true);
            
        }else{
        setError(false);
        console.log(data);
        signUp(data).then((resp)=>{
            console.log(data);
            console.log("sucess log")
            toast.success("Registration Sucessful!! your unique id is : "+resp)
            setData({
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
                            <h6 for="bname">Business Name</h6>
                            <Input type="text" placeholder="Business name" onChange={(e)=>handleChange(e,'bname')} value={data.bname}/>
                            {error&&data.bname.length==0 ?
                            <Label>Business name cannot be empty</Label>:""}
                        </FormGroup>
                        <FormGroup>
                            <h6 for="pname">Owners Name</h6><Input type="text" placeholder="Owners name" 
                            onChange={(e)=>handleChange(e,'pname')} value={data.pname}/>
                            {error&&data.pname.length==0 ?
                            <Label>Owner name cannot be empty</Label>:""}
                        </FormGroup>
                        <FormGroup>
                            <h6 for="drugL">Drug Licence</h6>
                            <Input type="text" placeholder="Licence number" onChange={(e)=>handleChange(e,'drugL')} value={data.drugL}/>
                            {error&&data.drugL.length==0 ?
                            <Label>Drug licance cannot be empty</Label>:""}
                        </FormGroup>
                        <FormGroup>
                            <h6 for="gst">GST</h6><Input type="text" placeholder="GST number" onChange={(e)=>handleChange(e,'gst')} value={data.gst}/>
                            {error&&data.gst.length!=15 ?
                            <Label>Enter valid GST number</Label>:""}
                        </FormGroup>
                        <FormGroup>
                            <h6 for="phNo">Phone number</h6><Input type="number" placeholder="Phone number" onChange={(e)=>handleChange(e,'phNo')} value={data.phNo}/>
                            {error&&data.phNo.length!=10 ?
                            <Label>Enter valid Phone number</Label>:""}
                        </FormGroup>
                        <FormGroup>
                            <h6 for="password">Password</h6><Input type="text" placeholder="Password" onChange={(e)=>handleChange(e,'password')} value={data.password}/>
                            {error&&data.password.length==0 ?
                            <Label>Password cannot be empty</Label>:""}
                        </FormGroup>
                        <Container>
                            <Button color="dark">Register</Button>
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