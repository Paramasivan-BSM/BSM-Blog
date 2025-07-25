import { Nav } from "./components/Nav"
import "./index.css"
import {BrowserRouter,Routes,Route} from "react-router-dom"

import { AuthForm } from "./pages/AuthForm"



function App() {
 

  return (
   <>
   <BrowserRouter>
  <AuthForm />
   
   <Routes>
    <Route path="/"></Route>
   </Routes>
   </BrowserRouter>


   </>
  )
}

export default App
