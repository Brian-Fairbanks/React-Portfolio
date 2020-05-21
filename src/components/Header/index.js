import React from 'react';

function Header(props) {
  return (
    <header className="bg-light sticky-top">
      <div className="inner container-md row p-0">
        <div className="brand col-md-5 orange p-0 m-0">
          <h1 className="text-light text-center ">
            Brian Fairbanks
          </h1>
        </div>
        {props.children}
      </div>
    </header>
  );
}

export default Header;