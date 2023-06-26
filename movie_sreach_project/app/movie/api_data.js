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

  const handleButtonClick = (index, action) => {
    setData(prevData => {
      const newData = [...prevData];//it is convert into array rest opreter//
      const currentItem = newData[index]; //it is give current item from Array//
      if (action === 'increment'){ //if action === increment then it is increment //
        newData[index] = {
          ...currentItem,
          clickCount: (currentItem.clickCount || 0) + 1
        };
      } else if (action === 'decrement') {
        newData[index] = {
          ...currentItem,
          clickCount: (currentItem.clickCount || 0) - 1
        };
      }

      return newData;
    });
  };
   const handleDelete = (itemId) => {
    ssetData(data.filter(item => item.id !== itemId));
  };
  return (
    <div>
      {data.map((item, index) => (
        <div key={item.id}>
          <span>{item.title}</span>
          <button onClick={() => handleButtonClick(index, 'increment')}>Increment</button>
          <button onClick={() => handleButtonClick(index, 'decrement')}>Decrement</button>
          <span>{item.clickCount || 0} times</span>
        </div>
         <button onClick={() => handleDelete(item.id)}>Delete</button>
      ))}
    </div>
  );
}

export default MyComponent;
