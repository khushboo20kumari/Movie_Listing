 
 function Delete({onDelete}){
 
    return(
        <>
        
           <div className="delete">
           
             <div className="delete-icon">
               <img src="fluent_delete-32-regular.svg" alt="Delete" onClick={onDelete} />
             </div>
             
          </div>

       </>
    )
 }
 export default Delete;
