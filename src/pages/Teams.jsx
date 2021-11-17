import React from "react";
import LogoImg from '../images/logo.svg';
import SmallButton from "../components/SmallButton";
import SmallText from "../components/SmallText";
import "../css/style.css";
import { useUser } from "../context/user-context";
import DevCard from "../components/DevCard";


const Teams = () => {
    const {user} = useUser();
    let currUser = false;

    const currentUser = user.find((u) => u.userLogged === true)
    if (currentUser) {
    currUser = true;
    }

    return (
        <div className="bg-extra-end">
            <nav className="bg-white py-1 fixxed px-8 md:px-48 shadow-sm">
                <div className="relative flex items-center justify-between h-16">

                    {/* LOGO */}
                    <div className="flex items-center">
                        <img className="h-7 md:h-9" src={LogoImg} alt="Workflow" />
                    </div>

                    {/* MENU */}
                    <div className="flex items-center justify-end gap-x-2 md:gap-x-4">
                        {
                            (currUser) ? <SmallButton title="Logout"/> : 
                            (<>
                            <SmallButton title="Register" url="/register"/>
                            <SmallText title="Login" url={"/login"}/>
                            </>)
                        }
                    </div>
                    
                </div>
            </nav>
            <div className="px-8 md:px-48 py-32">
                <div className="font-bold text-3xl flex justify-center pb-10">
                    Our Teams
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6 md:gap-y-4">
                    <DevCard
                        img="team-randy.png"
                        name="Randy Christian"
                        campus="Universitas Brawijaya"
                        roles="Team Leader, Frontend Developer" 
                    />
                    <DevCard
                        img="man.jpeg"
                        name="Salman Setiawan"
                        campus="Institut Teknologi Kalimantan"
                        roles="Designer, Frontend Developer" 
                    />
                    <DevCard
                        img="team-ike.png"
                        name="Ike Nurul Fatihah"
                        campus="Universitas Jember"
                        roles="Data Engineer, Frontend Developer" 
                    />
                    <DevCard
                        img="team-azadin.png"
                        name="Azadin Azhar Purba"
                        campus="Politeknik Negeri Medan"
                        roles="Frontend Developer" 
                    />
                </div>
            </div>
            
        </div>
    )
}

export default Teams
