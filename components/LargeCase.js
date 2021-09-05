import React from 'react';
import Image from 'next/image';

export default function LargeCase({img,title,description,buttonText}) {
    return (
        <section className="relative py-16 cursor-pointer">
            <div className="h-96 min-w-[300px] relative">
                <Image src={img}
                layout="fill"
                objectFit="cover"
                className="rounded-2xl"/>
             </div>
             <div className="absolute top-32 left-12">
                    <h3>{title}</h3>
                    <h3>{description}</h3>
                    <button className="text-white
                      bg-gray-900 rounded-full h-10 mt-2 w-32
                      ">{buttonText}</button>
             </div>
        </section>
        
    )
}
