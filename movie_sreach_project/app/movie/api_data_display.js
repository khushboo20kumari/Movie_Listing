import Delete_button_compo from './delete_button_compo';
import LikeDislikeButton from './like_dislike_compo';
function Api_data_display({api_data,setData}){
    const handleDelete = itemId => {
    const updatedData = api_data.filter(item => item.id !== itemId);
        setData(updatedData);
   }; 
   return(
      <div>
          {api_data.map((item, index) => (
            <div className="row">
            
               <div className="infromation_item">   
                  <div key={item.id}>
                     <p>{item.title}</p>
                     <p>{item.overview}</p>
                      <LikeDislikeButton />
                  </div>
                  
                  <div className="img">     
                     <img
                     src={`http://image.tmdb.org/t/p/w500${item.poster_path}`} className="img"/>
                  </div>   
                
                  
                   
                   <div className="delete_button">
                     <Delete_button_compo
                       itemData={item} 
                       handleDelete={handleDelete}/>
                   </div>
                   
        
                  </div>
                  <hr/>
                </div>        
           ))}
           </div>
   )
}
export default Api_data_display;

