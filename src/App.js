import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import './App.css'
import { Auth, MemoriesRoute, Loading, Memory } from "./views"
import { Nav } from "./components"

const App = ()=>{
    const [isAuth, setIsAuth] = React.useState(doesHttpOnlyCookieExist('special-memory-token'));
    if(!isAuth)
        return <Auth onSubmit={()=>setIsAuth(true)}/>
    else return (
        <BrowserRouter>
            <Nav onLogOut={()=>setIsAuth(false)}/>
            <Routes>
                <Route path="/" element={ <MemoriesRoute /> }/>
                <Route path="/home" element={ <MemoriesRoute /> }/>
                <Route path="/memories/*" element={ <MemoriesRoute /> } />
                <Route path="/memory/:type/:id" element={ <Memory /> } />
            </Routes>
        </BrowserRouter>
    )
}
function doesHttpOnlyCookieExist(cookieName){
    const newCookie = cookieName + '=new_value;path=/;'
    document.cookie = newCookie
    const doesExist = document.cookie.indexOf(cookieName + '=') === -1;
    document.cookie = newCookie + '=;Max-Age=-999999'
    return doesExist;
}
export default App;