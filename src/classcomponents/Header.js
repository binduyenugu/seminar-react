import React, { Component } from 'react'


class Header extends Component {
    render() {
        return (
            <div className="container" style={{display:"inline", width:"600px"}}>
                <div className="row" >
                    <div className="col-sm-3"><a href="/register/_add">Employee Registration</a></div>
                    <div className="col-sm-3"><a href="/list">Registered Employees</a></div>
                </div>
            </div>
        )
    }
}

export default Header;
