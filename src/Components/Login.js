import React, { useState } from "react"
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Button, Card, CardBody, CardHeader, Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";
import NavBar from "./NavBar";

const Login = () =>{

    const [loginDetail,setLoginDetail]=useState({
        username:'',
        password:''
    })

    const handleChange=(event,field)=>{
        let actualValue=event.target.value
        setLoginDetail({...loginDetail,[field]:actualValue})
    }

    const handleFormSubmit=(event)=>{
        event.preventDefault();
        console.log(loginDetail);
        if(loginDetail.username.trim()=='' || loginDetail.password.trim()==''){
            toast.error("Username or password required");
        }
    }
    const [loading,setLoading] =useState(false);
    return <div>
        <NavBar/>
        <Container >
            <Row className="mt-5">
                <Col sm={{size:6,offset:3}}>       
                    <Card >
                        <CardHeader>
                            Login
                        </CardHeader>
                        <CardBody>
                            <Form onSubmit={handleFormSubmit}>
                                <FormGroup>
                                    <h6 for="userId" >User Id</h6>
                                    <Input type="text" placeholder="Enter User Id" value={(loginDetail.username)} onChange={(e)=>handleChange(e,'username')}/>
                                </FormGroup>
                                <FormGroup>
                                    <h6 for="password" >password</h6>
                                    <Input type="password" placeholder="Enter password" value={(loginDetail.password)} onChange={(e)=>handleChange(e,'password')}/>
                                </FormGroup>
                                <Container>
                                    <Button color="dark">
                                        <Link to="/singleUser" className="nav-link">Login</Link>
                                    </Button>
                                    <Button type="reset" className="ms-2" color="secondary" >
                                        <Link to="/signUp" className="nav-link">Signup</Link>
                                    </Button>
                                </Container>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    </div>
}

export default Login;