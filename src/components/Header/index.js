import React from 'react';

function Header(props) {
  return (
    <header class="bg-light sticky-top">
      <div class="inner container-md row p-0">
        <div class="brand col-md-5 orange p-0 m-0">
          <h1 class="text-light text-center ">
            Brian Fairbanks
          </h1>
        </div>
        {props.children}
      </div>
    </header>
  );
}

export default Header;