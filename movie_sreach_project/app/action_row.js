 import Delete from './delete';
  
 import  Rating from './rating';
 function Action_row({onDelete,onLike, onDislike,like}){
 
    return(
    
       <>
       
         <Delete onDelete={onDelete}/>
         <Rating onLike={onLike} onDislike={onDislike} onDislike={onDislike} like={like}/>
         
       </> 
    )
 }
 export default Action_row;
