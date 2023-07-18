 import React from 'react';
 import Action_row from './action_row';
 
 function Movie_row(props) {
    return (
    
          <>
            <div className="movie-row">
            
               <div className="image-container">
                  <img src={`http://image.tmdb.org/t/p/w500${props.movie.poster_path}`} className="img" />
               </div>

               <div className="detail-container">
               
                  <p>{props.movie.original_title}</p>
                  
                  <p>{props.movie.release_date}</p>
                  
                  <p>{props.movie.overview}</p>
                  
                  <Action_row
                   
                     onDelete={props.onDelete}
                     onDislike={props.onDislike}
                     onLike={props.onLike}
                     like={props.like}
                  />
               </div>
               
           </div>
           
           <hr className="hr" />
       </>
  );
}

export default Movie_row;

