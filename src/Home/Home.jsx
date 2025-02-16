import NavBar from '../NavBar'
import styles from './Home.module.css'
import { createContext ,useState , useEffect , } from 'react'
export const colorContext = createContext()
import { useNavigate } from 'react-router-dom'
import newYork from '../assets/transparent-image-City/newyork.webp'
import london2 from '../assets/transparent-image-City/london2.png'
import paris2 from '../assets/transparent-image-City/paris2.webp'


export default function Home(){
    const [color, sColor] = useState("green")
    const [currentSlide, setCurrentSlide] = useState(0);
    const navigate = useNavigate();
    const [value, sValue] = useState(0)
    const [value1, sValue1] = useState(0)
    useEffect(() => {
        const handleScroll = () => {
            let data = window.scrollY;
            sValue(Math.min(400,data))
            sValue1(data)
            console.log(data)
        }
        window.addEventListener("scroll" , handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    },[])
    return(
        <div>
            <colorContext.Provider value={color}>
                <NavBar/>
            </colorContext.Provider>
            <div className={styles.mainBox}>
                <img src={newYork} alt="" className={styles.img}/>
                <div className={styles.textBox} >
                    <h1 className={styles.text} style={{marginTop: value * 2.5 + "px"}}>City Tours</h1>
                </div>
            </div>
            <div className={styles.inherit}>
                <div className={styles.textBox2} >
                    <h1 className={styles.text2} style={{marginTop: value1 <= 700 ? (value1 - 419) + "px" : 300 + "px"}}>City Tours</h1>
                </div>
                <div className={styles.downText}>
                    <h1>Credit to multiple image owners online</h1>
                    <h1>© 2025 Pham Cong Danh.</h1>
                </div>
            </div>
        </div>
    )
}