import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function Register(props) {

    const history = useHistory();
    const [empDetails, setEmpDetails] = useState({id:'',name:'',username:'',password:'',email:''});
    const [operation, setOperation] = useState("Add");
    const id = props.match.id;

    useEffect(() => {
       const id = props.match.params.id;
       if(id === "_add"){
            setOperation("Add")
        }else{
            axios.get(`http://localhost:3001/api/register/${id}`)
            .then((response) => {
                setEmpDetails(response.data[0]);
            })
            setOperation("Edit")
    }
    }, [])
    
    
    const add = (e) => {
        e.preventDefault();  
        if (operation === "Add") {
            axios.post("http://localhost:3001/api/register/add", empDetails)
                .then((response) => {
                    console.log("Successfully Inserted");
                })
        }
        else if("Edit"){
            const id = empDetails.id;
            axios.put(`http://localhost:3001/api/register/edit/${id}`, empDetails)
                .then((response) => {
                    console.log("Successfully Updated");
                })
        }   
        
        setEmpDetails(empDetails); 
        history.push('/list');
    }

    return (
        <>
            <div className="container" style={{width:"fit-content"}}>
                <div className="row">&nbsp;</div>
                <div className="row">&nbsp;</div>
                <form onSubmit={add}>
                    <div className="row">
                        <h4>Register New Employee</h4>
                    </div>
                    <div className="row">&nbsp;</div>
                    <div className="row">
                        <div className="col-sm-6">Full Name</div>  
                        <div className="col-sm-6">
                            <input type="text" name="empName" id="empName" value={empDetails.name}  onChange={(e)=> setEmpDetails({...empDetails,name:e.target.value})} />
                        </div>  
                    </div>
                    <div className="row">&nbsp;</div>
                    <div className="row">
                        <div className="col-sm-6">User Name</div>  
                        <div className="col-sm-6">
                            <input type="text" name="empUserName" id="empUserName" value={empDetails.username}  onChange={(e)=> setEmpDetails({...empDetails,username:e.target.value})} />
                        </div>  
                    </div>
                    <div className="row">&nbsp;</div>
                    <div className="row">
                        <div className="col-sm-6">Password</div>  
                        <div className="col-sm-6">
                            <input type="password" name="empPassword" id="empPassword" value={empDetails.password}  onChange={(e)=> setEmpDetails({...empDetails,password:e.target.value})} />
                        </div>  
                    </div>
                    <div className="row">&nbsp;</div>
                    <div className="row">
                        <div className="col-sm-6">Employee Email Id</div>  
                        <div className="col-sm-6">
                            <input type="email" name="empEmail" id="empEmail" value={empDetails.email} onChange={(e)=> setEmpDetails({...empDetails,email:e.target.value})} />
                        </div>  
                    </div>
                    <br/> 
                    <div style={{textAlign:"center"}}>
                    <button type="submit" className="col-sm-3 btn btn-primary" onClick={add}>{operation}</button>                        
                    </div>
                </form>
            </div>
        </>
    )
}

export default Register;
