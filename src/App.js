import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import './App.css'
import { Auth, MemoriesRoute, Loading } from "./views"
import { Nav } from "./components"
import { usePromiseTracker } from "./hooks/usePromiseTracker.js"

const App = ()=>{
    const [isAuth, setIsAuth] = React.useState(doesHttpOnlyCookieExist('special-memory-token'));
    const { promise } = usePromiseTracker();
    if(promise.inProgress)
        return <Loading description={promise.description}/>
    else if(!isAuth)
        return <Auth onSubmit={()=>setIsAuth(true)}/>
    return (
        <BrowserRouter>
            <Nav onLogOut={()=>setIsAuth(false)}/>
            <Routes>
                <Route path="/" element={ <MemoriesRoute /> }/>
                <Route path="/home" element={ <MemoriesRoute /> }/>
                <Route path="/memories/*" element={ <MemoriesRoute /> } />
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
export default App