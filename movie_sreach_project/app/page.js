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
          setMovieData(movieData.results.slice(0, 10));
          console.log(movieData);
       })
      
       .catch(error => {
          console.error('Error fetching data:', error);
        });
    };

    useEffect(() => {
       fetchData();
    }, []);
    
    return(
    
       <div>
          <Header/>
       
          {movieData.map((movie) => (
             <Movie_row
                key={movie.id}
                movie={movie}
              />
           ))}
       
     </div>
   );
 }
 export default Page;
