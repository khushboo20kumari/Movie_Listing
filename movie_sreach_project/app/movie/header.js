import React, { useEffect, useState } from "react";
const App = () => {
  const [users, setUsers] = useState([
    { id: 1, original_title: "Movie 1", vote_average: 7.5, overview: "Overview 1", Name: "Name 1", release_date: "2021-01-01", countLike: 0 },
    { id: 2, original_title: "Movie 2", vote_average: 8.2, overview: "Overview 2", Name: "Name 2", release_date: "2021-02-01", countLike: 0 },
    // ... add more users here
  ]);

  const fetchUserData = () => {
    // Fetch data from API and update users state
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const handleLikeClick = (index) => {
    setUsers(prevUsers => {
      const updatedUsers = [...prevUsers];
      updatedUsers[index] = { ...updatedUsers[index], countLike: updatedUsers[index].countLike + 1 };
      return updatedUsers;
    });
  };

  return (
    <div>
      <ul>
        {users.map((user, index) => (
          <div className="main">
            <p key={user.id}>{user.original_title}</p>
            <p key={user.id}>{user.vote_average}</p>
            <p key={user.id}>{user.overview}</p>
            <p key={user.id}>{user.Name}</p>
            <p key={user.id}>{user.release_date}</p>
              <p>Likes: {user.countLike}</p>
            <button className="button" onClick={() => handleLikeClick(index)}>
              <svg className="likebutton" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
               
              </svg>
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default App;

