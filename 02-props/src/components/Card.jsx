import React from 'react'

const Card = (props) => { 
  return (
     <div className="card">
        <img src="https://images.unsplash.com/photo-1774028156721-706b219614b2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D"></img>
      <h1>{props.user},{props.age}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <button>view profile</button>
    </div>
  )
}

export default Card
