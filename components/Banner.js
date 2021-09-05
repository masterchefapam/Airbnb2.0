import React from 'react';
import Image from 'next/image';

function Banner() {
    return (
        <div className="relative h-[500px] sm:h-[400px] lg:h-[500px] xl:h-[600px]
            2xl:h-[700px]">
           
            <Image src="https://links.papareact.com/0fm" 
            layout="fill"
            objectFit="cover"
            
            />

         
            <div className="absolute text-center top-1/2 w-full text-red-500 font-extrabold">
            <p className="">Hello</p>
            <button className="border hover:shadow-xl active:border-purple-500 active:border-opacity-50
                 bg-white rounded-full shadow-lg transition duration-150 hover:scale-105 ease-out hover:text-black
                  active:scale-90 h-14 w-40 text-purple-600 p-2 ">I'm Flexible</button>
                  
            </div>
        </div>
    )
}

export default Banner
