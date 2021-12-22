import React from 'react'
import { Link } from 'react-router-dom';

const BookingButton = () => {
    return (
        <div className="py-2.5">
            <Link to={()=>{}} className="py-3 px-2 bg-purple-600 hover:bg-pink-600 rounded-md text-white text-xs md:text-sm font-semibold md:font-bold">
                Book
            </Link >
        </div>
    )
}

export default BookingButton
