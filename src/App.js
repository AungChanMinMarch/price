import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import './App.css'
import { Auth, Memories, Loading } from "./views"
import { Nav } from "./components"
import { usePromiseTracker } from "./hooks/usePromiseTracker.js"

const App = ()=>{
    const [isAuth, setIsAuth] = React.useState(false);
    const { promise } = usePromiseTracker();
    if(promise.inProgress)
        return <Loading onCancel={promise.promiseCanceller} description={promise.description}/>
    else if(!isAuth)
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