import styles from './index.module.css'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'
import { useState ,createContext} from 'react';
import { colorContext } from '../Home/Home';
import { useContext } from 'react';
import { colorContext1 } from '../About/About';
import { colorContext2 } from '../Tours/Tour';

export {}
export default function NavBar(){
    const color = useContext(colorContext)

    const color1 = useContext(colorContext1)
    const color2 = useContext(colorContext2)
    return(
        <nav>
            <img src={logo} alt="logo" />
            <div className={styles.box}>
                <a href="/" className={styles.home} style={{color: color}}>
                        Home
                </a>
                <a href="about" className={styles.about} style={{color: color1}}>
                    About
                </a>
                <a href="tour" className={styles.tour} style={{color: color2}}>Tour</a>
            </div>
        </nav>
    )
}