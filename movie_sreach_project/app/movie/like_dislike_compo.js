function Like_dislike_Compo({index,setData}){
      const handleLikeClick = (index) => {
      setData((prevUsers) => {
      const updatedUsers = [...prevUsers];
      const user = updatedUsers[index];

      user.countLike += 1;
      return updatedUsers;
    });
  };
     return(
       <div>
            <p>Likes: {user.countLike}</p>
            <button className="button" onClick={() => handleLikeClick(index)}>
              <svg className="likebutton" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
              </svg>
            </button>
       </div>
     )
}
export default Like_dislike_Compo;
