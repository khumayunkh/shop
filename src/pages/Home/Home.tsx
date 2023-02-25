import React from "react";
import style from './Home.module.sass'

function Home(){
    return(
        <>
        <div className={style.container}>
            <div className={style.content}>
                <h1>Enjoy your life in our
                    luxurious furniture
                </h1>
                <p>If you are looking for a furniture then you have
                    come to the right place.
                </p>
                <button>Order Now</button>
            </div>
        </div>
        </>
    )
}

export default Home