function Delete_button_compo({itemData, handleDelete }){
     return(
           <div>
                <button onClick={() => handleDelete(itemData.id)}>Delete</button>
           </div>
     )
}
export default Delete_button_compo;


