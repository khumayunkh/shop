import React from "react";
import style from './Service.module.sass'

function Service(){
    return(
        <>
        <div className={style.container}>
            <div className={style.header}>
                <h3 className={style.title}>
                    We provide that service
                </h3>
                <p className={style.subtitle}>
                    It is a long established fact that a reader 
                    will be distracted by the service.
                </p>
            </div>
            <div className={style.content}>
                <div className={style.service}>
                    <div className={style.background1}></div>
                    <h4>Free Delevary</h4>
                    <p>It is a long established fact that a reader will be the service.</p>
                </div>
                <div className={style.service}>
                    <div className={style.background2}></div>
                    <h4>100% Guarnatee</h4>
                    <p>It is a long established fact that a reader will be the service.</p>
                </div>
                <div className={style.service}>
                    <div className={style.background3}></div>
                    <h4>Best Quality</h4>
                    <p>It is a long established fact that a reader will be the service.</p>
                </div>
            </div>
        </div>        
        </>
    )
}

export default Service