import React from 'react'
import "./BigCard.scss"
import pep from "../Images/zubaref.png"

function BigCard() {
    return (
        <div className='container_mini' >
            <div className="bigcard">
                <div className="bigcard_left">
                    <img src={pep} width="530px" alt="" />
                </div>
                <div className="bigcard_right">
                    <span>ABOUT US</span>
                    <h1>We are skilled in providing</h1>
                    <h1>superior services</h1>
                    <p className='p1'>Customer satisfaction is such a key part of many</p>
                    <p>successful businesses. Most companies have</p>
                    <button>Read More</button>
                </div>
            </div>
        </div>
    )
}

export default BigCard
