
import React from "react";
import { Container, Table } from "reactstrap";

const Prod = ({prod}) =>{
    return(
        <div>
            <Container>
                <Table dark hover striped>
                    <tbody>
                        <tr>
                            <th scope="row">{prod.prodId}</th>
                            <td>{prod.prodName}</td>
                            <td>Mfg.Date {prod.manDate}</td>
                            <td>Exp.Date {prod.expDate}</td>
                            <td>Rs: {prod.price}/piece</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </div>
    );
}

export default Prod;