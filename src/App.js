import Home from "./components/pages/Home";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Routes
} from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import {UserContextProvider} from "./context/UserContext";
import SignIn from "./components/pages/SignIn";
import SignUp from "./components/pages/SignUp";
import Account from "./components/pages/Account";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
    return (
        <>
            <UserContextProvider>
                <Routes>
                    <Route path='' element={<Home/>}/>
                    <Route path='/login' element={<SignIn/>}/>
                    <Route path='/signup' element={<SignUp/>}/>
                    <Route path='/account' element={
                        <ProtectedRoute>
                            <Account/>
                        </ProtectedRoute>
                    }/>
                </Routes>
                <Navbar/>
            </UserContextProvider>
        </>

    );
}

export default App;
