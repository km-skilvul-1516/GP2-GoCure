import React, { useState, useEffect } from "react";
import LogoImg from '../images/logo.svg'
import { Link } from "react-router-dom";
import Alert from '../components/Alert';

const Collab = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [asal, setInstansi] = useState("");
    const [alertMsg, setAlertMsg] = useState("");
    const [alert, setAlert] = useState(false);

    function handleRegister (e) {
        e.preventDefault();
        if (email === "" || name === "" || phone === "" || asal === "") {
            setAlertMsg("Please fill in all the required fields")
            setAlert(true);
        } else {
            setAlertMsg("Apply success")
            setAlert(true);
        }
    }

    return (
        <div>
            <div className="bg-screen-blob h-full xl:h-screen flex justify-center items-center">
                <div className="py-12 w-5/6 md:w-2/3">
                    <div className="rounded-2xl bg-white h-full">
                        <div className="w-full">
                            <div className="pt-12 pb-8 pl-6 md:pl-2 pr-6 md:pr-12">
                                <div className="flex justify-center pb-6">
                                    <img 
                                        className="flex h-10" 
                                        src={LogoImg} 
                                        alt="" 
                                    />
                                </div>
                                <div className="flex justify-center pb-6">
                                    <b>Partnership</b>
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
                                                Nama<b>*</b>
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
                                                No Telepon<b>*</b>
                                            </label>
                                            <input
                                                className="text-gray-900 appearance-none block w-full bg-gray-100 border border-gray-100 rounded py-2 px-2 my-2 text-xs leading-tight focus:outline-none focus:bg-gray-50 focus:border-gray-300"
                                                placeholder="0880-0000-0000" 
                                                id='phone' 
                                                value={phone} 
                                                onChange={(e) => setPhone(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        {/* Form 4 */}
                                        <div className="flex flex-wrap pt-3">
                                            <div className="w-full">
                                            <label className="tracking-wide text-sm font-bold">
                                                Asal Instansi<b>*</b>
                                            </label>
                                            <input
                                                className="text-gray-900 appearance-none block w-full bg-gray-100 border border-gray-100 rounded py-2 px-2 my-2 text-xs leading-tight focus:outline-none focus:bg-gray-50 focus:border-gray-300"
                                                placeholder="*********" 
                                                id='asal'  
                                                value={asal} 
                                                onChange={(e) => setInstansi(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-center md:justify-start pt-8 md:pt-5">
                                        <button onClick={handleRegister} className="py-2.5 px-5 bg-purple-600 hover:bg-pink-600 rounded-md text-white text-sm font-bold">
                                            Apply
                                        </button>
                                    </div>
                                </form>                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Collab
