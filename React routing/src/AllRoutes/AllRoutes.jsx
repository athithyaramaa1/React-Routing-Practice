import { Route, Routes } from "react-router-dom"
import Home from "../Components/Home"
import About from "../Components/About"
import Contacts from "../Components/Contacts"
import Error from "../Components/Error"

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/Contact" element={<Contacts />}></Route>
        <Route path="*" element={<Error />}></Route>

      </Routes>
    </div>
  )
}

export default AllRoutes
