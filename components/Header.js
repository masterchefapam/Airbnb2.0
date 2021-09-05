import React from 'react'
import Image from 'next/image';
import { SearchIcon,
        GlobeAltIcon,
        UserCircleIcon,
        UsersIcon,
        MenuIcon} from '@heroicons/react/solid';

export default function Header() {
    return (
        <div>
              <header className="sticky top-0 z-50 bg-white grid
              grid-cols-3 shadow-lg py-5 px-5 md:px-10">
                   {/* Left */}
                   <div className="relative flex items-center h-10 my-auto 
                    cursor-pointer">
                      <Image src="https://links.papareact.com/qd3" 
                         objectFit="contain" 
                         layout="fill"
                         objectPosition="left" alt="myImage"/>
                   </div>
                   {/* Middle */}
                   <div className="flex items-center min-w-min  md:border-2  
                   rounded-full py-2 md:shadow-sm">
                       <input type="text" 
                       className="outline-none pl-5 bg-transparent text-xs flex-grow" 
                       placeholder="start your search "/>

                       <SearchIcon className="hidden h-8 bg-red-400 w-8 
                       flex-shrink-0 md:inline-flex
                          rounded-full p-2 text-white cursor-pointer
                          md:mx-2"/>
                   </div>
                   {/* Right */}
                   <div className="flex items-center space-x-4 justify-end
                     text-gray-500">
                       <p className="text-sm hidden md:inline cursor-pointer">Become a host</p>
                       <GlobeAltIcon className="h-6 cursor-pointer"/>
                       <div className="flex border border-gray-500 rounded-full
                       space-x-2 p-1 ">
                           <MenuIcon className="h-6"/>
                           <UserCircleIcon className="h-6"/>
                       </div>
                   </div>
              </header>
        </div>
    )
}
