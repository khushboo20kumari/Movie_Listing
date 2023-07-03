import React from 'react';
function DeleteButton({item,setData,data}) {
   const handleDelete = (itemId) => {//itemId it is telling about in  array  which id item have deleted//
        setData(data.filter(item1 => item1.id !== itemId));
    };
    return (
            <>
              <img src="fluent_delete-32-regular.svg" onClick={() => handleDelete(item.id)}/>
            </>
           );
}
export default DeleteButton;
