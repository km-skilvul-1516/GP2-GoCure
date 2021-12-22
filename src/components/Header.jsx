import React from 'react'

const Header = (props) => {
    return (
        <div className="pb-4 md:pb-8">
            <a href={props.url}>
                <div className="bg-purple-700 rounded-md py-3 md:py-0">
                    <div className="h-full flex flex-wrap items-end content-end justify-between">
                        <div className="flex flex-col pl-3 md:pl-6 md:pb-6">
                        <p className="text-sm md:text-xl text-white md:pb-1">
                            {props.hi}
                        </p>
                        <p className="text-xl md:text-2xl text-white font-bold">
                            {props.name}
                        </p>
                        </div>
                        <img src={props.pic} alt="head" className="object-cover h-max md:h-52 w-1/3 rounded-tr-md rounded-br-md" />
                    </div>
                </div>
            </a>
        </div>
    )
}

export default Header
