import {Link, useNavigate} from "react-router-dom";
import UserContext from "../context/UserContext";
import {useContext} from "react";

const Navbar = () => {
    const {user, logOut} = useContext(UserContext);
    const navigate = useNavigate();
    const handleLogout = async () => {
        try {
            await logOut();
            navigate('/')
        } catch (err) {

        }
    }
    return (
        <div className={'flex items-center justify-between p-4 z-[100] w-full absolute top-0'}>
            <Link to='/'>
                <h1 className={'text-red-600 cursor-pointer text-4xl font-bold uppercase'}>netfilix</h1>
            </Link>

            <div>
                {
                    user?.email ?
                        (
                            <>
                                <Link to='/account'>
                                    <button className='text-white pr-4'>Account</button>
                                </Link>

                                <button onClick={() => handleLogout()}
                                        className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'>
                                    Log out
                                </button>
                            </>
                        )
                        :

                        (
                            <>

                                <Link to='/login'>
                                    <button className='text-white pr-4'>Sign In</button>
                                </Link>
                                <Link to='/signup'>
                                    <button className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'>
                                        Sign Up
                                    </button>
                                </Link>
                            </>
                        )

                }
            </div>
        </div>
    );
}
export default Navbar;