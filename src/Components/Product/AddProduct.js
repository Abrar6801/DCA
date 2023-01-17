import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Button, Card, CardBody, CardHeader, Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { prodAdd } from "../Services/prod-service";
import InfoNavBar from "../User/InfoNavBar";


const AddProduct=()=>{
    const [data,setData] = useState({
        productName:'',
        manufacturingDate:'',
        expireDate:'',
        price:''
    })
    useEffect(()=>{
        document.title="Add Product";
    },[])
    const[error,setError] = useState(false)

    useEffect(()=>{
    },[data])

    const handleProd=(event,property)=>{
        setData({...data,[property]:event.target.value})
    }

    const resetData=()=>{
        setData({
            productName:'',
            manufacturingDate:'',
            expireDate:'',
            price:''
        })
    }

    const submitProd=(event)=>{
        event.preventDefault();
        if(data.productName.length==0 || data.manufacturingDate.length==0 || 
            data.expireDate.length==0 || data.price.length==0 || data.price<0){
            setError(true);
        }
        else{
        setError(false);
        console.log(data);
        prodAdd(data).then((resp)=>{
            console.log(resp);
            console.log("prod entered")
            toast.success("Product entered")
            setData({
                productName:'',
                manufacturingDate:'',
                expireDate:'',
                price:''
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
                    Add Product
                </CardHeader>
                <CardBody>
                    <Form onSubmit={submitProd}>
                        <FormGroup>
                            <h6 for="productName">Product Name</h6>
                            <Input type="text" placeholder="Product name"
                            onChange={(e)=>handleProd(e,'productName')} value={data.productName}/>
                            {error&&data.productName.length==0 ?
                            <Label>Product name cannot be empty</Label>:""}
                        </FormGroup>
                        <FormGroup>
                            <h6 for="manufacturingDate">Manufacturing Date</h6>
                            <Input type="date" placeholder="Manufacturing date"
                            onChange={(e)=>handleProd(e,'manufacturingDate')} value={data.manufacturingDate}/>
                            {error&&data.manufacturingDate.length==0 ?
                            <Label>Enter Manufacturing date</Label>:""}
                        </FormGroup>
                        <FormGroup>
                            <h6 for="expireDate">Expire Date</h6>
                            <Input type="date" placeholder="Expire date"
                            onChange={(e)=>handleProd(e,'expireDate')} value={data.expireDate}/>
                            {error&&data.expireDate.length==0 ?
                            <Label>Enter Expire date</Label>:""}
                        </FormGroup>
                        <FormGroup>
                            <h6 for="price">Price</h6>
                            <Input type="number" placeholder="Price"
                            onChange={(e)=>handleProd(e,'price')} value={data.price}/>
                            {error&&data.price.length==0||data.price<0 ?
                            <Label>Enter correct price</Label>:""}
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

export default AddProduct;