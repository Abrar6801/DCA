
import React from "react";
import { Container, Table } from "reactstrap";

const Prod = ({product}) =>{
    return(
        <div>
            <Container>
                <Table dark hover striped>
                    <tbody>
                        <tr>
                            <th scope="row">{product.productId}</th>
                            <td>{product.productName}</td>
                            <td>Mfg.Date {product.manufacturingDate}</td>
                            <td>Exp.Date {product.expireDate}</td>
                            <td>Rs: {product.price}/piece</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </div>
    );
}

export default Prod;