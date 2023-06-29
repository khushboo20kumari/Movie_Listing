import Delete_button_compo from './delete_button_compo';
import Like_dislike_Compo from './like_dislike_compo';
function Api_data_display({api_data,setData}){
    const handleDelete = itemId => {
    const updatedData = api_data.filter(item => item.id !== itemId);
        setData(updatedData);
   };
   return(
      <div>
      {api_data.map((item, index) => (
        <div key={item.id}>
            <p>{item.title}</p>
            <p>{item.overview}</p>
            <Delete_button_compo
            itemData={item}
            handleDelete={handleDelete}
          />
          <Like_dislike_Compo index={index} setData={set}/>
          </div>
      ))}
      </div>
   )
}
export default Api_data_display;

