
function Sort_com({data,likes,handleLike,handleDislike}){
    // Sort the dataArray based on the likes count in ascending order
    const sortedDataArray = data.sort((a, b) => {
      const likesA = likes[a.id] || 0;
      const likesB = likes[b.id] || 0;
      return likesA - likesB;
    });
     const handleDelete = (itemId) => {//itemId it is telling about in  array  which id item have deleted//
        setData(data.filter(item1 => item1.id !== itemId));
     };
    return (
      <div>
        {sortedDataArray.map((item) => (
           <div key={item.id}>
           <span>{item.title}</span>
           <button onClick={() => handleLike(item.id)}>Like</button>
           <button onClick={() => handleDislike(item.id)}>Dislike</button>
           <span>Likes: {likes[item.id] || 0}</span>
           <button onClick={() => handleDelete(item.id)}>Delete</button>
         </div>
        ))}
      </div>
    );
}
export default Sort_com;
 
