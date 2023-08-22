import React, {useEffect, useState} from 'react'

import './index.css'

function Expertise({expertise, filters, checkHandleHoverEnter, checkHandleHoverLeave}) {
     const [inFilter, setInFilter] = useState(false)

     const tag = expertise

     const checkFilter = () => {
          if (filters.length === 0) {
               setInFilter(true);
          }
          else {
               if (Array.isArray(filters)){
                    if (filters.findIndex(filter => filter === tag) >= 0) {
                         setInFilter(true)
                    }
                    else {
                         setInFilter(false)
                    }
               }
               else {
                    if (filters === tag) {
                         setInFilter(true)
                    }
                    else {
                         setInFilter(false)
                    }
               }
          }
     }

     useEffect(() => {
          checkFilter()
     }, [filters])

  return (
     <p className={inFilter? 'p__custom':'p__customDisabled'} 
          onMouseEnter={()=>checkHandleHoverEnter(expertise)} 
          onMouseLeave={()=>checkHandleHoverLeave()}>{expertise}
     </p>
  )
}

export default Expertise