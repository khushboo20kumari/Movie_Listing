"use client";
import React, { useState, useEffect } from 'react';
import Like from './like_dislike_button';
const DataComponent = () => {
    const [data, setData] = useState([]);
    const fetchData = () => {
      fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=89eef3426d167c3c8145a257ebe68357&')
       .then(response => response.json())
       .then(data => {
         setData(data.results.slice(0, 10));
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
         <Like data={data} />
      </div>
  )
}

export default DataComponent;

