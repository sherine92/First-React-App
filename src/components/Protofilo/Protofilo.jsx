import React, { Component } from 'react'
import img1 from "../../imges/cabin.png"
import img2 from "../../imges/cake.png"
import img3 from "../../imges/circus.png"
import img4 from "../../imges/game.png"
import img5 from "../../imges/safe.png"
import img6 from "../../imges/submarine.png"




export default class Protofilo extends Component {
    render() {
        return (
            <>
                <div className="container ">
                    <h2 className="text-center ">PORTFOLIO</h2>
                    <div className="row">
                        <div className="col-md-4 ">
                            <div className="portofilo-item">
                                <img src={img1} alt="" className="w-100 " />
                                <div className="overlay">
                                    <i class="fas fa-plus"></i>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="portofilo-item">
                                <img src={img2} alt="" className="w-100" />
                                <div className="overlay">
                                    <i class="fas fa-plus"></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 ">
                            <div className="portofilo-item">
                                <img src={img3} alt="" className="w-100" />
                                <div className="overlay">
                                    <i class="fas fa-plus"></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4  pt-5">
                            <div className="portofilo-item">
                                <img src={img4} alt="" className="w-100" />
                                <div className="overlay">
                                    <i class="fas fa-plus"></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 pt-5">
                            <div className="portofilo-item">
                                <img src={img5} alt="" className="w-100" />
                                <div className="overlay">
                                    <i class="fas fa-plus"></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 pt-5 end-row">
                            <div className="portofilo-item">
                                <img src={img6} alt="" className="w-100" />
                                <div className="overlay">
                                    <i class="fas fa-plus"></i>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </>
        )
    }
}
