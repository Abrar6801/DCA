
import React from "react";
import { Container, Table } from "reactstrap";

const Prod = ({prod}) =>{
    return(
        <div>
            <Container>
                <Table dark hover striped>
                    <tbody>
                        <tr>
                            <th scope="row">{prod.productId}</th>
                            <td>{prod.productName}</td>
                            <td>Mfg.Date {prod.manufacturingDate}</td>
                            <td>Exp.Date {prod.expireDate}</td>
                            <td>Rs: {prod.price}/piece</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </div>
    );
}

export default Prod;