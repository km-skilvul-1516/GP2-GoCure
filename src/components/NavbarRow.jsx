import React from 'react'
import HomeImg from '../images/navbar/home.svg'
import BlogsImg from '../images/navbar/blogs.svg'
import VideosImg from '../images/navbar/videos.svg'
import ExpertsImg from '../images/navbar/experts.svg'
import LogoutImg from '../images/navbar/logout.svg'
import { Link } from 'react-router-dom'
import { useUser } from "../context/user-context";

const NavbarRow = () => {
    const {dispatch} = useUser();
    function handleClick() {
        dispatch({type: "LOGOUT"})
    }
    return (
        <div>
            <div className="flex items-center gap-x-4 py-1.5">
                <Link className="p-1" to="/profile">
                    <img className="w-6 md:w-7 xl:w-8" alt="home" src={HomeImg} />
                </Link>
                <Link className="p-1" to="/blogs">
                    <img className="w-6 md:w-7 xl:w-8" alt="blogs" src={BlogsImg} />
                </Link>
                <Link className="p-1" to="/videos">
                    <img className="w-6 md:w-7 xl:w-8" alt="video" src={VideosImg} />
                </Link>
                <Link className="p-1" to="/experts">
                    <img className="w-6 md:w-7 xl:w-8" alt="experts" src={ExpertsImg} />
                </Link>
                <div className="px-2">

                </div>
                <Link to="/" className="p-1" onClick={() => handleClick()}>
                    <img className="w-6 md:w-7 xl:w-8" alt="logout" src={LogoutImg} />
                </Link>
            </div>
        </div>
    )
}

export default NavbarRow
