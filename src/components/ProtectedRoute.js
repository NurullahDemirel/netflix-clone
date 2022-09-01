
import {useNavigate,Navigate} from "react-router-dom";
import UserContext from "../context/UserContext";
import {useContext} from "react";
const ProtectedRoute = ({children}) => {
    const {user } = useContext(UserContext);
    const navigate = useNavigate();
    if (!user){
        return <Navigate to="/"/>
    }
    else {
        return  children;
    }
}

export default ProtectedRoute;