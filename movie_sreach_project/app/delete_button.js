import React from 'react';

function Delete_button_compo({ itemData, handleDelete }) {
  const handleClick = () => {
    handleDelete(itemData.id);
  };

  return (
    <button onClick={handleClick}>Delete</button>
  );
}

export default Delete_button_compo;
