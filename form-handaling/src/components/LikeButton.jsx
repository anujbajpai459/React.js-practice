import React,{useState} from 'react'

const LikeButton = () => {

 const [Liked,setLiked]=useState(false);
   return (
     <div><button onClick={()=>setLiked(!Liked)}>
       {Liked ? "❤️Liked":"🤍Like"}  text
       </button>
       </div>
   )
}

export default LikeButton
