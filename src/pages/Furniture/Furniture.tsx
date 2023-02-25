import React from "react";
import style from './Furniture.module.sass'
import furniture from './../../assets/furniture.png'
import closed from './../../assets/closed.png'
import bed from './../../assets/bed.png'
import sofa from './../../assets/sofa.png'

function Furniture(){
    return(
        <>
        <div className={style.container}>
            <div className={style.header}>
                <h1>
                    Our Furniture
                </h1>
                <p>
                    It is a long established fact that a 
                    reader will be distracted by the service.
                </p>
            </div>
            <div className={style.content}>
                <div className={style.menu}>
                    <div className={style.menu__input}>
                        <input placeholder="Search a furniture"/>
                    </div>  
                    <div className={style.menu__items}>
                        <button className={style.menu__button}>All</button>
                        <button className={style.menu__button}>Chair</button>
                        <button className={style.menu__button}>Table</button>
                        <button className={style.menu__button}>Bed</button>
                        <button className={style.menu__button}>Sofa</button>
                        <button className={style.menu__button}>Wardrobe</button>
                        <button className={style.menu__button}>Almirah</button>
                        <button className={style.menu__button}>Dimple</button>
                        <button className={style.menu__button}>Rack</button>
                    </div>
                </div>
                <div className={style.furnitures}>
                    <div className={style.card}>
                        <img src={furniture}/>
                        <h4 className={style.card__name}>
                            <span>
                                Furniture Name     
                            </span>
                            <span>
                                250$
                            </span>
                        </h4>
                        <p>
                            It is a long estiabs lished 
                            fact that a reader will be the service.
                        </p>
                        <button className={style.card__button}>Order Now</button>
                    </div>
                    <div className={style.card}>
                        <img src={bed}/>
                        <h4 className={style.card__name}>
                            <span>
                                Furniture Name     
                            </span>
                            <span>
                                250$
                            </span>
                        </h4>
                        <p>
                            It is a long estiabs lished 
                            fact that a reader will be the service.
                        </p>
                        <button className={style.card__button}>Order Now</button>
                    </div>
                    <div className={style.card}>
                        <img src={closed}/>
                        <h4 className={style.card__name}>
                            <span>
                                Furniture Name     
                            </span>
                            <span>
                                250$
                            </span>
                        </h4>
                        <p>
                            It is a long estiabs lished 
                            fact that a reader will be the service.
                        </p>
                        <button className={style.card__button}>Order Now</button>
                    </div>
                    <div className={style.card}>
                        <img src={sofa}/>
                        <h4 className={style.card__name}>
                            <span>
                                Furniture Name     
                            </span>
                            <span>
                                250$
                            </span>
                        </h4>
                        <p>
                            It is a long estiabs lished 
                            fact that a reader will be the service.
                        </p>
                        <button className={style.card__button}>Order Now</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Furniture