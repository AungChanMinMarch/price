import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import './App.css'
import { Auth, Memories } from "./views"
import { Nav } from "./components"
const App = ()=>{
    const [isAuth, setIsAuth] = React.useState(false);
    if(!isAuth)
        return <Auth onSubmit={()=>setIsAuth(true)}/>
    return (
        <BrowserRouter>
            <Nav onLogOut={()=>setIsAuth(false)}/>
            <Routes>
                <Route path="/" element={ <Memories /> }/>
            </Routes>
        </BrowserRouter>
    )
}
export default App