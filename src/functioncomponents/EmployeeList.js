import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import { AiFillDelete } from 'react-icons/ai';
import { BiEdit } from 'react-icons/bi';

function EmployeeList() {

    const history = useHistory();
    const [employeeList, setEmployeeList] = useState([]);
    useEffect(() => {
        console.log("hii");
        axios.get("http://localhost:3001/api/register/")
            .then((response) => {
                setEmployeeList(response.data)
                return response.data;
            })
            .catch((error) => {
                console.log("Problem in the page....");
            })
    },[])

    const edit = (id) => {
        history.push(`/register/${id}`)
    }

    const del = (id) => {
        const flag = window.confirm("Do you want to delete?");
        if (flag) {
            axios.delete(`http://localhost:3001/api/register/delete/${id}`)
                .then((response) => {
                    alert("Successfully Deleted");
                })
        }
    }

    return (
        <div>
            <div >
                    <h3>Employee Details</h3>
                    <div className="cards">
                        {
                            employeeList.map((emp) => {
                                return (

                                    <Card>
                                        <Card.Img variant="top" />
                                        <Card.Body>
                                            <Card.Title>{emp.name}</Card.Title>
                                            <Card.Subtitle>{emp.username} - {emp.email}</Card.Subtitle>
                                        </Card.Body>
                                        <div>
                                            <BiEdit onClick={() => edit(emp.id)} />
                                            &nbsp;&nbsp;&nbsp;&nbsp;
                                            <AiFillDelete onClick={() => del(emp.id)} />

                                        </div>
                                    </Card>
                                )
                            })
                        }
                    </div>
                </div>
        </div>
    )
}

export default EmployeeList;
