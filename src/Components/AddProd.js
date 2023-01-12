import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Button, Card, CardBody, CardHeader, Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";
import InfoNavBar from "./InfoNavBar";
import { prodAdd } from "./Services/prod-service";

const AddProd=()=>{
    const [data,setData] = useState({
        prodName:'',
        manDate:'',
        expDate:'',
        price:''
    })

    const[error,setError] = useState(false)

    useEffect(()=>{
    },[data])

    const handleProd=(event,property)=>{
        setData({...data,[property]:event.target.value})
    }

    const resetData=()=>{
        setData({
            prodName:'',
            manDate:'',
            expDate:'',
            price:''
        })
    }

    const submitProd=(event)=>{
        event.preventDefault();
        if(data.prodName.length==0 || data.manDate.length==0 || data.expDate.length==0 || data.price.length==0){
            setError(true);
        }
        else{
        setError(false);
        console.log(data);
        prodAdd(data).then((resp)=>{
            console.log(resp);
            console.log("product entered")
            toast.success("Product entered")
            setData({
                prodName:'',
                manDate:'',
                expDate:'',
                price:''
            })
        }).catch((eroor)=>{
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
                    Add Product
                </CardHeader>
                <CardBody>
                    <Form onSubmit={submitProd}>
                        <FormGroup>
                            <h6 for="prodName">Product Name</h6>
                            <Input type="text" placeholder="Product name"
                            onChange={(e)=>handleProd(e,'prodName')} value={data.prodName}/>
                            {error&&data.prodName.length==0 ?
                            <Label>Product name cannot be empty</Label>:""}
                        </FormGroup>
                        <FormGroup>
                            <h6 for="manDate">Manufacturing Date</h6>
                            <Input type="date" placeholder="Manufacturing date"
                            onChange={(e)=>handleProd(e,'manDate')} value={data.manDate}/>
                            {error&&data.manDate.length==0 ?
                            <Label>Enter Manufacturing date</Label>:""}
                        </FormGroup>
                        <FormGroup>
                            <h6 for="expDate">Expire Date</h6>
                            <Input type="date" placeholder="Expire date"
                            onChange={(e)=>handleProd(e,'expDate')} value={data.expDate}/>
                            {error&&data.expDate.length==0 ?
                            <Label>Enter Expire date</Label>:""}
                        </FormGroup>
                        <FormGroup>
                            <h6 for="price">Price</h6>
                            <Input type="number" placeholder="Price"
                            onChange={(e)=>handleProd(e,'price')} value={data.price}/>
                            {error&&data.price.length==0 ?
                            <Label>Enter price</Label>:""}
                        </FormGroup>
                        <Container>
                            <Button color="dark" onSubmit={submitProd}>Add</Button>
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

export default AddProd;