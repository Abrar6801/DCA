import React from "react";
import { Button, Card, CardBody, CardHeader, Col, Container, Form, FormGroup, Input, Row } from "reactstrap";
import NavBar from "../NavBar";


const AdminLogin =()=>{
    return <div>
        <NavBar/>
        <Container>
            <Row className="mt-5">
                <Col sm={{size:6,offset:3}}>       
                    <Card>
                        <CardHeader>
                            Admin Login
                        </CardHeader>
                        <CardBody>
                            <Form>
                                <FormGroup>
                                    <h6 for="adminId" >User Id</h6>
                                    <Input type="text" placeholder="Enter admin Id"/>
                                </FormGroup>
                                <FormGroup>
                                    <h6 for="password" >password</h6>
                                    <Input type="password" placeholder="Enter password"/>
                                </FormGroup>
                                <Container>
                                    <Button type="login" color="dark" href="/info">Login</Button>
                                </Container>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    </div>
}

export default AdminLogin;