import React from 'react';

function Header() {
  return (
    <>
      <div className="header">
        <div>
          <img src="Icon - Logo.png" alt="Logo" className="logo" />
        </div>
        <div>
          <img src="Movie Hub.png" alt="Movie Hub" className="logo1" />
        </div>
        <div>
          <p className="watch">Watch</p>
        </div>
        <div>
          <p className="add">Add Movie</p>
        </div>
      </div>
      <hr/>
    </>
  );
}

export default Header;

