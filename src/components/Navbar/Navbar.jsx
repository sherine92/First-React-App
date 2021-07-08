import React, { Component } from 'react'

import { NavLink } from "react-router-dom"

export default class Navbar extends Component {
    render() {
        return (
            <>

                <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
                    <div className="container">
                        <NavLink className="navbar-brand" to="#">Start React</NavLink>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <NavLink className="nav-link" to="/home">Home <span className="sr-only">(current)</span></NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/about">About</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/prot">Portofilo</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/contact">Contact</NavLink>
                                </li>


                            </ul>

                        </div>
                    </div>
                </nav>

            </>
        )
    }
}

