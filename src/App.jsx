
import './App.css'
import {Route, Routes} from "react-router-dom";
import Layout from "./components/Layout.jsx";
import RidDirect from "./pages/RidDirect.jsx";
import UserPage from "./pages/UserPage.jsx";
import SingleUser from "./pages/SingleUser.jsx";

function App() {
    return(
        <>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<RidDirect/>}/>
                    <Route path={'/users'} element={<UserPage/>}/>
                    <Route path={'users/:id'} element={<SingleUser/>}/>
                </Route>
            </Routes>
        </>
)

}

export default App
