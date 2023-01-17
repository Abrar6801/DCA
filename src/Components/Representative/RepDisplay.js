import React, { useState } from "react";
import { Button,Container, Table } from "reactstrap";




const RepDisplay=({rep})=>{
    return(
    <div> 
        <Container>
            <Table dark hover striped>
                <tbody>
                    <tr>
                        <th scope="row">{rep.representativeId}</th>
                        <td>{rep.name}</td>
                        <td>{rep.position}</td>
                        <td>{rep.email}</td>
                        <td>{rep.phoneNumber}</td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    </div>);
}

export default RepDisplay;