 import React, { useState } from 'react';

  function Add_movie({ addMovieData}) {
  
     const [original_title, setOriginal_title] = useState('');
     const [poster_path, setPoster_path] = useState('');
     const [release_date, setRelease_date] = useState('');
     const [overview, setOverview] = useState('');
     

     const handleMovieNameChange = (e) => {
     
        setOriginal_title(e.target.value);
     };

     const handleReleaseDateChange = (e) => {
     
         setRelease_date(e.target.value);
     };

     const handlerDescriptionChange = (e) => {
     
        setOverview(e.target.value);
     };

     const handleImgChange = (e) => {
     
        if (e.target.files.length) {
           setPoster_path(URL.createObjectURL(e.target.files[0]));
         }
     };

     const handleSubmit = (e) => {
        e.preventDefault();
        
        const newData = {
        
             original_title: original_title,
             release_date: release_date,
             overview: overview,
             poster_path: poster_path
        };

        addMovieData(newData);
        setOriginal_title('');
        setRelease_date('');
        setOverview('');
        setPoster_path('');
  };

  return (
  
    <div className="MovieAdd-Container">
      <form onSubmit={handleSubmit} className="form-container">
        <p className="form">Fill this Form to add Movie</p>
        <br />
        <label className="movie-name">
          Name of Movie
        </label>
        <br />
        <input
          type="text"
          value={original_title}
          onChange={handleMovieNameChange}
          className="movie-name-input"
        />
        <br />

        <label className="movie-name">
          Year of Release
        </label>
        <br />
        <input
          type="text"
          value={release_date}
          onChange={handleReleaseDateChange}
          className="movie-name-input"
        />

        <div className="row1">
          <p className="movie-name">Description</p>
          <textarea
            type="text"
            value={overview}
            onChange={handlerDescriptionChange}
            className="description"
          ></textarea>
          <br/>
          <label>
           
          </label>
          <input
            className="b"
            type="file"
            onChange={handleImgChange}
          />
          <button type="submit">Add Movie</button>
        </div>
      </form>
    </div>
  );
}

export default Add_movie;

