import React from 'react'
import { Bookmark } from 'lucide-react';

const Card = (props) => {
  return (
    <div className="card">
      <div className="top">
        <img src={props.brandLogo} alt="nachoo"/>
        <button>Save <Bookmark size={14}/></button>
      </div>

      <div className="center">
        <h3>{props.company} <span>{props.posted}</span></h3>
        <h2>{props.post}</h2>

        <div className="tag">
          <h4>Part Time</h4>
          <h4>Senior Level</h4>
        </div>
      </div>

      <div className="bottom">
        <div>
          <h3>$120/hr</h3>
          <p>Noida, India</p>
        </div>
        <button>Apply Now</button>
      </div>
    </div>
  )
}

export default Card;