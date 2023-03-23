import React from 'react'
// import { restaurants } from '../../../data/restaurants';
import ExploreCard from './exploreCard';
import './ExploreSection.css';
const ExploreSection = ({list, collectionName}) => {
  return (
    <div className='max-width explore-section'>
      <div className="collection-title">{collectionName}</div>
      <div className="explore-grid">
        {list.map((restaurants)=>{
          return <ExploreCard restaurants={restaurants}/>
      })}
      </div>
    </div>
  )
}

export default ExploreSection
