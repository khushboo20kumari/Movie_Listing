'use client'
import React, { useState, useEffect } from 'react';
import  Api_data_display from './api_data_display';
import Delete_button_compo from './delete_button_compo';
import Like_dislike_Compo from './like_dislike_Compo';
function MyComponent() {
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
      <Api_data_display api_data={data} setData={setData} />
      <Like_dislike_Compo setData={setData}/>
    </div>
  );
}

export default MyComponent;
