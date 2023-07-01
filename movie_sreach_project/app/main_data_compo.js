"use client"
import React, { useState, useEffect } from 'react';
function Data() {
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
  return (
    <div>
  {data.map((item) => (
    <div key={item.id}>
      <img src={`http://image.tmdb.org/t/p/w500${item.poster_path}`} className="img" />
      <p>{item.title}</p>
      <p>{item.overview}</p>
    </div>
  ))}
</div>

  );
}

export default Data;


