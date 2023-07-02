function Rating({likes,item}){
   return(
      <>
         <span className="rating">{likes[item.id] || 0}</span>
         
      </>
   )
}
export default Rating;
