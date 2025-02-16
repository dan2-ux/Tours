import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Home from './Home/Home'
import Tour from './Tours/Tour'
import About from './About/About'

export default function App(){
  return(
    <div>
      <Router basename='/'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='about' element={<About/>} />
          <Route path='tour' element={<Tour/>} />
        </Routes>
      </Router>
    </div>
  )
}
