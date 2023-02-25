import React from "react";
import style from './Header.module.sass'


function Header(){
    return(
        <>
        <div className={style.container}>
            <div className={style.logo}>
                <h2>SQ R3</h2>
            </div>
            <div className={style.menu}>
                <button>Home</button>
                <button>About</button>
                <button>Services</button>
                <button>Furniture</button>
                <button>Order Now</button>
            </div>
        </div>
        </>
    )
}


export default Header