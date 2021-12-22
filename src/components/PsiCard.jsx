import React from 'react'
import {Link} from "react-router-dom"
import BookingButton from './BookingButton'

const PsiCard = (props) => {
    return (
        <div>
            <Link to={`/${props.category}/${props.id}`}>
                <div className="flex bg-white text-gray-900 hover:text-purple-600 rounded shadow-md py-2 px-4 cursor-pointer">
                    <div className="flex flex-row items-center">
                        <div className="">
                            <img src={props.image} alt="psikolog" className="object-cover object-center h-12 w-full" />
                        </div>
                        <div className="px-2 py-3 md:py-4 col-span-2">
                            <div className="font-bold text-sm">
                                {props.title}
                            </div>
                            <p className="text-xs">
                                {props.description}
                            </p>
                        </div>
                        <BookingButton />
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default PsiCard
