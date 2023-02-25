import React from "react";
import style from './AboutUs.module.sass'
import img from './../../assets/aboutUs.png'
import amazon from './../../assets/Amazon.png'
import alibaba from './../../assets/Alibaba.png'
import image from './../../assets/Ellipse.png'

function AboutUs(){
    return(
        <>
        <div className={style.container}>
            <div className={style.header}>
                <h3 className={style.title}>
                    Learn about us
                </h3>
                <p className={style.subtitle}>
                    It’s short title here
                </p>
            </div>
            <div className={style.content}>
                <img src={img}/>
                <div className={style.description}>
                    <p>
                    Lorem Ipsum has been the industry's standard dummy 
                    text ever to since the 1500s, type and s
                    crambled it to make a type specimen book. 
                    It has survived not only five centuries, 
                    but also the leap into electronic typesetting.
                    type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also 
                    the leap into electronic typesetting
                    </p>
                    <div className={style.shops}>
                        <img src={amazon}/>
                        <img src={alibaba}/>
                        <img src={image}/>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default AboutUs