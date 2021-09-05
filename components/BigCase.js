import React from 'react';
import Image from 'next/image';

export default function BigCase({img ,title}) {
    return (
        <div className="pt-5 ">
            <div className="relative h-80 w-80 mb-2">
            <Image src={img} layout="fill" className="rounded-xl" alt='myImage'/>
               
            </div>
            <p className="font-semibold text-xl">{title}</p>
          </div>
    )
}
