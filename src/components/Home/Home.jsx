import React, { Component } from 'react'
import img from "../../imges/avataaars.svg"
// import img2 from "../../imges/star.png"


export default class Home extends Component {

    render() {
        return (
            <>
                <section id="Home">
                    <div className=" home text-center text-white">
                        <img src={img} alt="" />
                        <h1 className="line">START REACT</h1>
                        <i class="fas fa-star"></i>
                        <p>Graphic Artist - Web Designer - Illustrator</p>
                    </div>
                </section>
            </>
        )
    }
}
