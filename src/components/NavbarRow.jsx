import React from 'react'
import HomeImg from '../images/navbar/home.svg'
import BlogsImg from '../images/navbar/blogs.svg'
import VideosImg from '../images/navbar/videos.svg'
import ExpertsImg from '../images/navbar/experts.svg'
import LogoutImg from '../images/navbar/logout.svg'
import { Link } from 'react-router-dom'

const NavbarRow = () => {
    return (
        <div>
            <div className="flex items-center py-3">
                <Link className="pl-6 pr-2" to="/">
                    <img className="w-6 md:w-7 xl:w-8" src={HomeImg} />
                </Link>
                <Link className="px-2" to="/">
                    <img className="w-6 md:w-7 xl:w-8" src={BlogsImg} />
                </Link>
                <Link className="px-2" to="/">
                    <img className="w-6 md:w-7 xl:w-8" src={VideosImg} />
                </Link>
                <Link className="px-2" to="/">
                    <img className="w-6 md:w-7 xl:w-8" src={ExpertsImg} />
                </Link>

                <Link className="px-6" to="/">
                    <img className="w-6 md:w-7 xl:w-8" src={LogoutImg} />
                </Link>
            </div>
        </div>
    )
}

export default NavbarRow