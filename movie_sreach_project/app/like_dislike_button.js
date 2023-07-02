"use client";
import React, { useState} from 'react';
import Sort_com from './sort_copo';
function Like({data}){
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
       <div>
           <Sort_com data={data} handleLike={handleLike} handleDislike={handleDislike} likes={likes}/>
       </div>
     )
}
export default Like;
