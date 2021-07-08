import React, { Component } from 'react'


export default class About extends Component {
    render() {
        return (
            <>

                <div className="About pt-4  text-white">
                    <h2 className=" text-center text-white ">ABOUT</h2>

                    <div className="row">
                        <div className="col-md-3 offset-3">
                            <p className="lead">Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                        </div>
                        <div className="col-md-3 ">
                            <p className="lead">You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}
