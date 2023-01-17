import React, { useState } from "react"
import { Link } from "react-router-dom";
import { Button, Card, CardBody, CardHeader, Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";
import NavBar from "./NavBar";

const Login = () =>{

    const [loginDetail,setLoginDetail]=useState({
        username:'',
        password:''
    })
    const [error,setError] = useState(false);
    const handleChange=(event,field)=>{
        let actualValue=event.target.value
        setLoginDetail({...loginDetail,[field]:actualValue})
    }

    const handleFormSubmit=(event)=>{
        event.preventDefault();
        if(loginDetail.username.length===0 || loginDetail.password.length===0){
            setError(true);
        }else{
            setError(false);
            setLoginDetail({
                username:'',
                password:''
            })
        }
    }
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
                                    <Input type="text" placeholder="Enter User Id"  onChange={(e)=>handleChange(e,'username')} value={(loginDetail.username)}/>
                                    {error&&loginDetail.username.length===0? <Label>Enter user Id</Label>:""}
                                </FormGroup>
                                <FormGroup>
                                    <h6 for="password" >password</h6>
                                    <Input type="password" placeholder="Enter password" value={(loginDetail.password)} onChange={(e)=>handleChange(e,'password')}/>
                                    {error&&loginDetail.password.length===0 ? <Label>Enter password</Label>:""}
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