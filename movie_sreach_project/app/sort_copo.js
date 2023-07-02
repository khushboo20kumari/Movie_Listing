import DeleteButton from './delete_button';
import Rating from './rating'; 
function Sort_com({data,likes,handleLike,handleDislike,setData}){
    console.log(setData,"khushboo")
    const sortedDataArray = data.sort((a, b) => {
      const likesA = likes[a.id] || 0;
      const likesB = likes[b.id] || 0;
      return likesA - likesB;
    });
    return (
    <div>
       {sortedDataArray.map((item) => (
        <div className="row">
           <div className="col1">
               <img src={item.img} className="img" />
           </div>
           <div className="col2">
              
                 <p>{item.name}</p>
                 <p>{item.release_date}</p>
                 <p>{item.type}</p>
                 <p>{item.Description}</p>
                 <img src="Vector.png" onClick={() => handleLike(item.id)} />
                  <Rating likes={likes} item={item}/>
                 <img src="Icon - Like (1).png" onClick={() => handleDislike(item.id)} />
                 
           </div>
           <div className="col3">
               <DeleteButton
                       itemData={item} 
                       setData={setData}
                       data={data}
                       /> 

           </div>
           
           
        </div>
        
        
         ))}
         <hr />
    </div>
   );
}
export default Sort_com;
 
