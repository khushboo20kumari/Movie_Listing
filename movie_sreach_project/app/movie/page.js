'use client'
import React, { useState, useEffect } from 'react';
function MyComponent() {
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=89eef3426d167c3c8145a257ebe68357&')
      .then(response => response.json())
      .then(data => {
        setData(data.results.slice(0, 10));
        console.log(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  const handleDelete = (itemId) => {//itemId it is telling about in  array  which id item have deleted//
    setData(data.filter(item1 => item1.id !== itemId));
  };
  return (
    <div>
      {data.map((item, index) => (
        <div key={item.id}>
            <p>{item.title}</p>
            <p>{item.overview}</p>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </div>
      ))}
    </div>
  );
}

export default MyComponent;
