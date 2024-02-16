import { Link } from 'react-router-dom'
import AllRoutes from './AllRoutes/AllRoutes'
import './App.css'

function App() {

  return (
    <>
    
     <div className='conatiner'>
      <Link to={'/'}><div><h1>Athithya ❤</h1></div></Link>
          <div className='linker'>
          <Link to='/about'><h2>About</h2></Link>
          <Link to='/Contact'><h2 className='contac'>Contact</h2></Link>
          </div>
          
     </div>
     <AllRoutes />
    </>
  )
}

export default App
