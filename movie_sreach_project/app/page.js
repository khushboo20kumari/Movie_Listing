 "use client";
 import React, { useState, useEffect } from 'react';
 import  Movie_row from './movie_row';
 import Header from './header';
 
 function Page() {
   const [movieData, setMovieData] = useState([]);
   const [likes, setLikes] = useState({});
   

   const fetchData = () => {
     fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=89eef3426d167c3c8145a257ebe68357&')
 
      .then(response => response.json())
      
      .then(movieData => {
          setMovieData(movieData.results.slice(0, 10))
          console.log(movieData);
       })
      
       .catch(error => {
          console.error('Error fetching data:', error)
        });
    };

    useEffect(() => {
       fetchData();
    }, []);
    console.log(likes,"like")
    
    const handleDelete = (id) => {
    
         const updatedMoviedata = movieData.filter((movie) => movie.id !== id);
         setMovieData(updatedMoviedata);
     }    

    
     const handleLike = (id) => {
        console.log(id,"id")
        const updatedLikes = { ...likes };
        
              if (updatedLikes[id] !== undefined){
                    updatedLikes[id] += 1;
                    
               } else {
                    updatedLikes[id] = 1;
        }
        
        setLikes(updatedLikes);
 
     };

     const handleDislike = (id) => {
         const updatedLikes = { ...likes };
         
         if (updatedLikes[id] !== undefined) {
              updatedLikes[id] -= 1;
              
         } else {
               pdatedLikes[id] = 1;
               
         }
         setLikes(updatedLikes);
     
     };
     
     
     const sortedDataArray = movieData.sort((a, b) => {
         let likesA = 0;
         let likesB = 0;

         if (likes[a.id] !== undefined) {
            likesA = likes[a.id];
         }

          if (likes[b.id] !== undefined) {
       likesB = likes[b.id];
     }

     return likesB - likesA;
   });

    
     
       return(
    
       <div>
          <Header/>
       
          {sortedDataArray.map((movie) => (
          
             <Movie_row
             
                key={movie.id}
                
                movie={movie}
                
                onDelete={() => handleDelete(movie.id)}
                
                onLike={() => handleLike(movie.id)}
                
                onDislike={() => handleDislike(movie.id)}
                
                like={likes[movie.id]}
                
              />
           ))}
       
     </div>
   );
 }
 export default Page;
 
 
