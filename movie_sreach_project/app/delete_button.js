import React from 'react';
function DeleteButton({ itemData,setData,data}) {
   const handleDelete = (itemId) => {//itemId it is telling about in  array  which id item have deleted//
        setData(data.filter(item1 => item1.id !== itemId));
  };
  return (
  <>
   
    <img src="fluent_delete-32-regular.svg" onClick={() => handleDelete(itemData.id)}/>
    </>
  );
}

export default DeleteButton;
