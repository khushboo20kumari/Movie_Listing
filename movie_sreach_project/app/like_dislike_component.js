"use client";
import React, { useState} from 'react';
function LikeDislike_compo({data,setData,item}){
      const [likes, setLikes] = useState({});
      const handleLike = (id) => {
        setLikes((prevLikes) => ({
        ...prevLikes,
        [id]: (prevLikes[id] || 0) + 1
        }));
      };
      const handleDislike = (id) => {
        setLikes((prevLikes) => ({
        ...prevLikes,
        [id]: (prevLikes[id] || 0) - 1
      }));
      };
     return(
      <div className="">
         <img src="Vector.png" onClick={() => handleLike(item.id)} />
         <span> {[item.id] || 0}</span>
         <img src="Icon - Like (1).png" onClick={() => handleDislike(item.id)} />
      </div>
     )
}
export default LikeDislike_compo;
