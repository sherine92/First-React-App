import React, { Component } from 'react'


export default class Contact extends Component {
    render() {
        return (
            <>
                <div className="form  w-50 m-auto">
                    <h2 className=" text-center">CONTACT ME</h2>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email Address" />
                    <input type="number" placeholder="Phone Number" />
                    <textarea name="massage" id="" cols="60" rows="6" placeholder="Massage"></textarea>
                    <button className="btn btn-info mt-4">Send</button>
                </div>
            </>
        )
    }
}
