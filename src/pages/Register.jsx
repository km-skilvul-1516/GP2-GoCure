import React, {useEffect, useState} from 'react'
import LoginImg from '../images/register.svg'
import LogoImg from '../images/logo.svg'
import { useUser } from "../context/user-context";
import { useNavigate, Link } from "react-router-dom";
import Alert from '../components/Alert';

const Register = (props) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [userLogged, setLogged] = useState(false);
    const {user, dispatch} = useUser();
    const [alert, setAlert] = useState(false);
    const [alertMsg, setAlertMsg] = useState("");
    const [currentUser, setCurrentUser] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        if(user){
            if(user.length !== 0){
                const currentUser = user.find((u) => u.email === email)
                setCurrentUser(currentUser);
            }
        }
    }, [email, user])
    
    function handleRegister (e) {
        e.preventDefault();
        if (currentUser) {
            console.log("Have account")
            setAlertMsg("You already have an account please login")
            setAlert(true);
        }
        else {
            if (name === "" || email === "" || password === "" || confirmPassword === "") {
                setAlertMsg("Please fill in all the required fields (*)")
                setAlert(true);
            }
            else if (password !== confirmPassword){
                setAlertMsg("Password don't match.")
                setAlert(true);
            }
            else{
                dispatch({ type: "REGISTER", name, email, password, userLogged });
                navigate("/login");
                setAlert(false);
            }
        }
    };

    return (
        <div>
            <div className="bg-screen-blob h-full xl:h-screen flex justify-center items-center">
                <div className="py-12 w-5/6 md:w-2/3">
                    <div className="rounded-2xl bg-white h-full">
                        <div className="flex flex-col md:flex-row justify-between gap-x-12">
                            <img 
                                className="hidden md:block w-6/12 px-12" 
                                src={LoginImg} 
                                alt="" 
                            />
                            <div className="w-full">
                                <div className="pt-12 pb-8 pl-6 md:pl-2 pr-6 md:pr-12">
                                    <div className="flex justify-center pb-6">
                                        <img 
                                            className="flex h-10" 
                                            src={LogoImg} 
                                            alt="" 
                                        />
                                    </div>
                                    <div className="pt-3">
                                        {alert ? <Alert alertMsg={alertMsg}/> : ""}
                                    </div>
                                    <form>
                                        <div>
                                            {/* Form 1 */}
                                            <div className="flex flex-wrap">
                                                <div className="w-full">
                                                <label className="tracking-wide text-sm font-bold">
                                                    Name<b>*</b>
                                                </label>
                                                <input
                                                    className="text-gray-900 appearance-none block w-full bg-gray-100 border border-gray-100 rounded py-2 px-2 my-2 text-xs leading-tight focus:outline-none focus:bg-gray-50 focus:border-gray-300"
                                                    placeholder="John Doe"
                                                    id='name' 
                                                    value={name} 
                                                    onChange={(e) => setName(e.target.value)}
                                                />
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            {/* Form 2 */}
                                            <div className="flex flex-wrap pt-3">
                                                <div className="w-full">
                                                <label className="tracking-wide text-sm font-bold">
                                                    Email<b>*</b>
                                                </label>
                                                <input
                                                    className="text-gray-900 appearance-none block w-full bg-gray-100 border border-gray-100 rounded py-2 px-2 my-2 text-xs leading-tight focus:outline-none focus:bg-gray-50 focus:border-gray-300"
                                                    placeholder="johndoe@mail.com" 
                                                    id='email' 
                                                    type="email" 
                                                    value={email} 
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            {/* Form 3 */}
                                            <div className="flex flex-wrap pt-3">
                                                <div className="w-full">
                                                <label className="tracking-wide text-sm font-bold">
                                                    Password<b>*</b>
                                                </label>
                                                <input
                                                    className="text-gray-900 appearance-none block w-full bg-gray-100 border border-gray-100 rounded py-2 px-2 my-2 text-xs leading-tight focus:outline-none focus:bg-gray-50 focus:border-gray-300"
                                                    placeholder="*********" 
                                                    id='password' 
                                                    type="password" 
                                                    value={password} 
                                                    onChange={(e) => setPassword(e.target.value)}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            {/* Form 4 */}
                                            <div className="flex flex-wrap pt-3">
                                                <div className="w-full">
                                                <label className="tracking-wide text-sm font-bold">
                                                    Confirm Password<b>*</b>
                                                </label>
                                                <input
                                                    className="text-gray-900 appearance-none block w-full bg-gray-100 border border-gray-100 rounded py-2 px-2 my-2 text-xs leading-tight focus:outline-none focus:bg-gray-50 focus:border-gray-300"
                                                    placeholder="*********" 
                                                    id='confirmPassword' 
                                                    type="password" 
                                                    value={confirmPassword} 
                                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex justify-center md:justify-start pt-8 md:pt-5">
                                            <button onClick={handleRegister} className="py-2.5 px-5 bg-purple-600 hover:bg-pink-600 rounded-md text-white text-sm font-bold">
                                                Register
                                            </button>
                                        </div>
                                        <div className="pt-6 justify-center flex md:justify-start">
                                            <p className="text-sm pb-6">Have an account? 
                                                <Link to="/login">
                                                    <b> Login</b>
                                                </Link>
                                            </p>
                                        </div>
                                    </form>                                
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
