import React from 'react'
import "./Container.scss"
import Peoples from "../Images/peoples.png"
import Stat from "../Images/stat.png"


function Container() {
    return (
        <div>
            <div className="container">
                <div className="left_container">
                    <h1>We’re a Creative</h1>
                    <h1 className='h11'>Design Agency</h1>
                    <p>We are delivering top level digital services</p>
                    <p>best experlenced team, just get stared</p>
                    <div className="buttons">
                        <button>Get Started</button>
                        <span>How it works</span>
                    </div>
                    <div className="procents">
                        <h3>20+</h3>
                        <h3>90%</h3>
                        <h3>80%</h3>
                    </div>
                </div>
                <div className="right_container">
                    <img src={Peoples} width="623px" alt="" />
                    <div className="abs">
                        <img src={Stat} width="100px" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Container
