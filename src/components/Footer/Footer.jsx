import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <>
                <section className="footer text-center" >
                    <div className="container">
                        <div className="row ">
                            <div className="col-md-4">
                                <h3>LOCATION</h3>
                                <h5>2215 John Daniel Drive</h5>
                                <h5>Clark, MO 65243</h5>
                            </div>
                            <div className="col-md-4">
                                <h3>AROUND THE WEB</h3>
                                <i className="fab fa-facebook-f"></i>
                                <i className="fab fa-twitter"></i>
                                <i className="fab fa-linkedin-in"></i>
                                <i className="fab fa-dribbble"></i>
                            </div>
                            <div className="col-md-4 text-center">
                                <h3>ABOUT FREELANCER</h3>
                                <p >Freelance is a free to use, MIT<br /> licensed Bootstrap theme created by .</p>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="copy">
                    <p >Copyright © Your Website 2021</p>
                </div>

            </>
        )
    }
}
