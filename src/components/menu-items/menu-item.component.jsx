import React from "react";
import './menu-item.style.scss'
  

const MenuItem = ({title, imageUrl, size})=> (
    <div  className= {`${size} menu-item`}>
      <div style={{backgroundImage: `url(${imageUrl})`}} className="background-image"/>
          <div className="content">
            <h3 className="title">{title}</h3>
            <span className="subtitle">shop now</span>
          </div>
    </div>
)
export default MenuItem;