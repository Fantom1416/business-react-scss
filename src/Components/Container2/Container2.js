import React from 'react'
import "./Container2.scss"
import Refresh from "../Images/refresh.png"
import Soc from "../Images/soc.png"
import Naush from "../Images/headphones.png"
import work from "../Images/work.png"


function Container2() {
    return (
        <div className="">
            <div className='container2'>
                <div className="left_container2">
                    <span>Why choose us</span>
                    <h1 className='h11'>Expert advising clients</h1>
                    <h1 className='h11'> On financial challenges</h1>
                    <p >Customer satisfaction is such a key part of many</p>
                    <p className='p11'>successful businesses. Most companies ,..</p>
                    <div className="categories">
                        <div className="categoriya">
                            <div className="categori_img">
                                <img src={Refresh} alt="" />
                            </div>
                            <div className="categori_text">
                                <h1>Frist working process</h1>
                                <p>Customer satisfaction is such a key</p>
                                <p>part of many successful businesses.</p>
                            </div>
                        </div>
                        <div className="categoriya">
                            <div className="categori_img">
                                <img src={Soc} alt="" />
                            </div>
                            <div className="categori_text">
                                <h1>Frist working process</h1>
                                <p>Customer satisfaction is such a key</p>
                                <p>part of many successful businesses.</p>
                            </div>
                        </div>
                        <div className="categoriya">
                            <div className="categori_img">
                                <img src={Naush} alt="" />
                            </div>
                            <div className="categori_text">
                                <h1>Frist working process</h1>
                                <p>Customer satisfaction is such a key</p>
                                <p>part of many successful businesses.</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="right_container2">
                    <img src={work} width="510px" alt="" />
                </div>
            </div>
            <div className="rek">
                <span>OUR SERVIACES</span>
                <h1>What Creative Design</h1>
                <h1 className='mb'>We Offer</h1>
                <p>Business owners and managers lead by example. The values and</p>
                <p>work ethic displayed by a company's decision makers have a direct</p>
                <p>...</p>
            </div>
        </div>
    )
}

export default Container2
