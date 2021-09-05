import React from 'react'

function smallCard({img,location,distance}) {
    return (
        <div>
       
        
              <div key={location} >
                  
                  <div className="flex items-center w-full space-x-2 cursor-pointer
                  hover:bg-gray-300 hover:p-2 hover:rounded-lg hover:scale-100 
                  transtion duration-200 ease-out">
                        <img src={img} className="w-16 h-16 rounded-lg"/>
                        <div>
                                <h2 className="font-semibold" >{location}</h2>
                                <p className="text-xs">{distance}</p>
                        </div>
                 </div>
              </div>
              
          
         
        </div>
    )
}

export default smallCard
