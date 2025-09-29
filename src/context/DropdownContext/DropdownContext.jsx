import React, { createContext, useEffect } from 'react'

const dropdownInfo = createContext()
const DropdownContext = ({children}) => {
    const handleDropdown= useEffect(()=>{
        
    },[])
  return (
    
    <div>
        <dropdownInfo.Provider value={{}}>
            {children}
        </dropdownInfo.Provider>
    </div>
  )
}

export  {DropdownContext, dropdownInfo}