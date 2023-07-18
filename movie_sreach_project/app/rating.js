
function Rating({onLike,onDislike,like}){

   return(
       
         <div className="Rating">
       
             <div className="like-icon">
                <img src="Vector.png" alt="Like" onClick={onLike} />
             </div>
       
             <div className="votes">
                <p>{like}</p>
             </div>
       
             <div className="dislike-icon">
                <img src="Icon - Like (1).png" alt="Dislike" onClick={onDislike} />
             </div>
         </div>

       
        )
}
export default Rating;
