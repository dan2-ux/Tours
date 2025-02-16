import styles from './Tour.module.css'
import NavBar from '../NavBar'
import { createContext } from 'react'
import { useState , useEffect , useRef} from 'react'
export const colorContext2 = createContext()
import { createSwapy } from 'swapy'


import London from '../assets/london.jpeg'
import Paris from '../assets/paris.jpg'
import NewYork from '../assets/newyork.jpg'
import Tokyo from '../assets/tokyo.jpg'

export default function tour(){
    const [color, sColor] = useState("green")
    const swapy = useRef(null)
    const container = useRef(null)
    const [drag, sDrag] = useState(false)
    const [name, sName] = useState()
    const [img, sImg] = useState()
    const [popu, sPopu] = useState()
    const [data, sData] =    useState([{name: "London",img: London, population: "8.866 million"},
                    {name: "Paris",img: Paris, population: "2.103 million"}, 
                    {name: "NewYork",img: NewYork, population: "8.258 million"}, 
                    {name: "Tokyo",img: Tokyo, population: "14.18 million"}])
    useEffect(() => {
        if (container.current) {
          swapy.current = createSwapy(container.current)
          swapy.current.onSwap((event) => {
            console.log('swap', event);
          })
        }
        return () => {
          swapy.current?.destroy()
        }
      }, [data])
    const doDel = (e,i) => {
        sData(data.filter((_,index) => index !== i))
    }
    function disDD() {
        if(swapy.current){
            swapy.current.enable(drag);
            sDrag(!drag)
        }
    }
    function doAdd(){
        sData(data => [...data, {name: name, img: img, population: popu + "million"}]);
        sName("")
        sImg("")
        sPopu(0)
    }
    function uploadImg(e){
        const file = e.target.files[0];
        if(file){
            const reader = new FileReader();
            reader.onload = (event) =>{
                sImg(event.target.result)
            }
            reader.readAsDataURL(file)
        }
    }
    return(
        <div>
            <colorContext2.Provider value={color}>
                <NavBar/>
            </colorContext2.Provider>
            <div className={styles.cover}>
                <div className={styles.upperBox}>
                    <button onClick={disDD} className={styles.block} title='click to enable or disable drag and drop animation'>
                        {drag ? <div> <i class="fa-solid fa-lock">
                    </i> <span>Disable Drag</span></div>   : <div><i class="fa-solid fa-unlock"></i> <span>Enable Drag</span></div> } </button>
                    <h1>Add new City</h1>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <label htmlFor="name">Enter City's Name:</label>
                                </td>
                                <td>
                                    <input type="text" id='name' value={name}
                                    onChange={(e) => sName(e.target.value)} />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor="img">Enter City's Image:</label>
                                </td>
                                <td>
                                    <input type="file" id='img'
                                    accept='.jpg,.jpeg, .png' 
                                    onChange={uploadImg}/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                <label htmlFor="popu">Enter City's Population:</label>
                                </td>
                                <td>
                                    <input type="number" id='popu' value={popu}
                                    onChange={(e) => sPopu(e.target.value)} min={0}/>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <button className={styles.button1}
                    onClick={doAdd}>Add</button>
                </div>
                <div ref={container} className={styles.box}>
                    {data.map((e,i) => (
                        <div data-swapy-slot={i} className={styles.place}>
                            <div data-swapy-item={i} className={styles.indi}>
                                <div key={i} className={styles.smallBox}>
                                    <div className={styles.name}>
                                        <h1>{e.name}</h1>
                                        <button className={styles.button}
                                        onClick={(e) => doDel(e,i)}><i class="fa-solid fa-trash"></i></button>
                                    </div>
                                    <img src={e.img} alt="city image" />
                                    <h3>Population: {e.population}</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}