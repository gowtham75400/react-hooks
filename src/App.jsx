import About from "./Components/Router/About"
import Contact from "./Components/Router/Contact"
import Error from "./Components/Router/Error"
import Home from "./Components/Router/Home"
import Navbar from "./Components/Router/Navbar"
import User from "./Components/Router/User"
import Users from "./Components/Router/Users"
import Main from "./Components/useCallback/Main"
import Footer from "./Components/useContext/Footer"
import Profile from "./Components/useContext/Profile"
import Effect from "./Components/useEffect/Effect"
import Layout from "./Components/useLayoutEffect/Layout"
import ReducerEx from "./Components/useReducer/ReducerEx"
import Ref from "./Components/useRef/Ref"
import Ref2 from "./Components/useRef/Ref2"
import State from "./Components/UseState/State"
import {BrowserRouter,Routes,Route} from "react-router-dom"

function App() {



  return (
    <>
    {/* <State/> */}
    {/* <Effect/> */}
    {/* <Ref/> */}
    {/* <Ref2/> */}
    {/* <Main/> */}
    {/* <Profile/>
    <Footer/> */}
    {/* <ReducerEx/> */}
    {/* <Layout/> */}
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      {/* <Route path="/users" element={<Users/>}/> */}
      <Route path="/user/:username" element={<User/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/users" element={<Users/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="*" element={<Error/>}/>
    </Routes>
    </BrowserRouter>

  </>
  )
}

export default App
