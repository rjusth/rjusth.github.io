import React, {useState} from 'react'

import './index.css'
import data from '../data.json'
import FocusButton from './FocusButton'
import Experience from './Experience'
import Expertise from './Expertise'

// markup
function IndexPage (){

  const [filteredData, setFilteredData] = useState("");

  const handleHoverEnter = (value) => {
    setFilteredData(value)
  }

  const handleHoverLeave = () => {
    setFilteredData("")
  }

  return (
    <main>
      <title>Resume</title>
      <div className='index__container'>
        <div className='index__header'>
          <h1>{data.intro.name}</h1>
          <h2>{data.intro.title}</h2>
        </div>
        <div className='index__main'>
          <div className='main__left'>
            <div className='left__section'>
              <h3 className='section__title'>CONTACT</h3>
              <div className='left__sectionContentContainer'>
                {data.contact.content.map((value) => (
                  <p>{value.value}</p>
                ))}
              </div>
            </div>
            <div className='left__section'>
              <h3 className='section__title'>EDUCATION</h3>
              <div className='left__sectionContentContainer'>
                {data.education.content.map((content) => (
                  <div className='left__sectionContent'>
                    <h4>{content.title}</h4>
                    <h5 className='left__sectionContentInfo'>{content.where}, {content.when}</h5>
                  </div>
                  ))}
              </div>
            </div>
            <div className='left__section'>
              <h3 className='section__title'>EXPERTISE</h3>
              <div className='left__sectionContentContainer'>
                {data.expertise.map((expertise) => (
                  <div className='left__sectionContent'>
                    <h4>{expertise.type}</h4>
                    <div className='left__sectionContentDetail'>
                      {expertise.content.map((content) => (
                        <Expertise expertise={content} filters={filteredData} checkHandleHoverEnter={handleHoverEnter} checkHandleHoverLeave={handleHoverLeave}/>
                      ))}
                    </div>
                  </div>
                  ))}
              </div>
            </div>
          </div>
          <div className='main__right'>
            <div className='right__section'>
              <h3 className='section__title title1'>EXPERIENCE</h3>
              <div className='right__sectionContentContainer'>
                {data.experience.map((experience) => (
                  <Experience experience={experience} filters={filteredData} checkHandleHoverEnter={handleHoverEnter} checkHandleHoverLeave={handleHoverLeave}/>
                  ))}
              </div>
              <h3 className='section__title title2'>ACTIVITY</h3>
              <div className='right__sectionContentContainer'>
                {data.activity.map((activity) => (
                  <Experience experience={activity} filters={filteredData} checkHandleHoverEnter={handleHoverEnter} checkHandleHoverLeave={handleHoverLeave}/>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default IndexPage
