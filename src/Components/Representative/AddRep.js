import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Button, Card, CardBody, CardHeader, Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { repAdd } from "../Services/rep-service";
import InfoNavBar from "../User/InfoNavBar";


const AddRep=()=>{
    const [data,setData] = useState({
        name:'',
        position:'',
        phoneNumber:'',
        email:''
    })

    const [error,setError] = useState(false)

    useEffect(()=>{
    },[data])

    const handleRep=(event,property)=>{
        setData({...data,[property]:event.target.value})
    }

    const resetData=()=>{
        setData({
            name:'',
            position:'',
            phoneNumber:'',
            email:''
        })
    }

    const submitRep=(event)=>{
        event.preventDefault();
        if(data.name.length==0 || data.position.length==0 || data.phoneNumber.length!=10 || data.position.length==0 || data.phoneNumber<6000000000 ){
            setError(true)
        }else{
        setError(false);
        console.log(data);
        repAdd(data).then((resp)=>{
            console.log(resp);
            console.log("entered rep")
            toast.success("Representative added")
            setData({
                name:'',
                position:'',
                phoneNumber:'',
                email:''
            })
        }).catch((error)=>{
            console.log(error);
            console.log("Error log");
        })
    }
    }
    return <div>
        <InfoNavBar/>
        <Container>
            <Row className="mt-5">
            <Col sm={{size: 6,offset:3}}>
                <Card color="dark" outline>
                <CardHeader>
                    Add Representative
                </CardHeader>
                <CardBody>
                    <Form onSubmit={submitRep}>
                        <FormGroup>
                            <h6 for="name">Name</h6>
                            <Input type="text" placeholder="Representaive name"
                            onChange={(e)=>handleRep(e,'name')} value={data.name}/>
                            {error&&data.name.length==0 ?
                            <Label>Name cannot be empty</Label>:""}
                        </FormGroup>
                        <FormGroup>
                            <h6 for="position">position</h6>
                            <Input type="text" placeholder="position"
                            onChange={(e)=>handleRep(e,'position')} value={data.position}/>
                            {error&&data.position.length==0 ?
                            <Label>position cannot be empty</Label>:""}
                        </FormGroup>
                        <FormGroup>
                            <h6 for="phoneNumber">Phone Number</h6>
                            <Input type="number" placeholder="Phone number"
                            onChange={(e)=>handleRep(e,'phoneNumber')} value={data.phoneNumber}/>
                            {error&&data.phoneNumber.length!=10|| data.phoneNumber<6000000000 ?
                            <Label>Enter valid Phone number</Label>:""}
                        </FormGroup>
                        <FormGroup>
                            <h6 for="email">Email</h6>
                            <Input type="email" placeholder="Email"
                            onChange={(e)=>handleRep(e,'email')} value={data.email}/>
                            {error&&data.email.length==0 ?
                            <Label>Email cannot be empty</Label>:""}
                        </FormGroup>
                        <Container>
                            <Button color="dark" onSubmit={submitRep}>Add</Button>
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

export default AddRep;