import NavBar from '../NavBar'
import { createContext } from 'react'
import { useState } from 'react'
export const colorContext1 = createContext()
import styles from './About.module.css'

export default function about(){
    const [color, sColor] = useState("green")
    const [dis1 ,sDis1] = useState("none")
    const [dis2 ,sDis2] = useState("none")
    function doShow1(){
        sDis1(dis1 === "none" ? "block" : "none")
    }
    function doShow2(){
        sDis2(dis2 === "none" ? "block" : "none")
    }

    return(
        <div>
            <colorContext1.Provider value={color}>
                <NavBar/>
            </colorContext1.Provider>
            <h1 className={styles.text}>Information about this pages</h1>
            <div className={styles.mainBox}>
                <div className={styles.one}>
                    <div className={styles.holdOne}>
                        <button className={styles.buttonOne}
                        onClick={doShow1} id='one'>
                            {dis1 === "none" ? <i className='fa-solid fa-down-long'></i>:
                            <i className='fa-solid fa-up-long'></i>}
                        </button>
                        <label htmlFor="one">
                            What this page about
                        </label>
                    </div>
                    <div className={styles.forOne}>
                        <div className={styles.mot} style={{display: dis1}} >
                            <p id='one' 
                            className={styles.infoOne}>
                                <ul>
                                    <li>Display some of the most vistied cities in the world</li>
                                    <li>A place for people can set their next destination</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.two}>
                    <div className={styles.holdTwo}>
                        <button className={styles.buttonTwo}
                        onClick={doShow2} id='two'>
                            {dis2 === "none" ? <i className='fa-solid fa-down-long'></i>:
                            <i className='fa-solid fa-up-long'></i>}
                        </button>
                        <label htmlFor="two">
                            Key compoments to make this website
                        </label>
                    </div>
                    <div className={styles.forTwo}>
                        <div className={styles.hai} style={{display: dis2}} >
                            <p id='two' 
                            className={styles.infoTwo}>
                                <ul>
                                    <li>React together with some react libraries as font-end</li>
                                    <li>Tools like font awesome, swapy libarary for drap and drop</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}