import React, {useEffect, useState} from 'react'

import './index.css'

function Experience({experience, filters, checkHandleHoverEnter, checkHandleHoverLeave}) {
     const [inFilter, setInFilter] = useState(false)
     const [onMouseEnterArea, setOnMouseEnterArea] = useState(false)

     const tags = experience? experience.tag : []

     const checkFilter = () => {
          if (filters.length === 0) {
               setInFilter(true);
          }
          else {
               if (Array.isArray(tags)){
                    if (tags.findIndex(tag => tag === filters) >= 0) {
                         setInFilter(true)
                    }
                    else {
                         setInFilter(false)
                    }
               } else {
                    if (tags === filters) {
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
          experience?
          <div className={inFilter || onMouseEnterArea? 'right__sectionContent' : 'right__sectionContentDisabled'}
               onMouseEnter={() => {checkHandleHoverEnter(tags); setOnMouseEnterArea(true)}} 
               onMouseLeave={() => {checkHandleHoverLeave(); ; setOnMouseEnterArea(false)}}>
               <h4 className='right__sectionContentTitle'>{experience.title}</h4>
               <h5 className='right__sectionContentInfo'>{experience.where}, {experience.when}</h5>
               {experience.task.map((task) => (
                    <div className='right__sectionContentDetailContainer'>
                         <p className='right__sectionContentDetail'>&#8226;</p>
                         <p className='right__sectionContentDetail'>{task}</p>
                    </div>
               ))}
               {experience.hasOwnProperty('link')?
                    <div className='right__sectionContentDetailContainer'>
                         <p className='right__sectionContentLink'>&#8226;</p>
                         <p className='right__sectionContentLink'><a href={experience.link}>{experience.link}</a></p>
                    </div>
                    :null
               }
          </div>
          :null
     )
}

export default Experience