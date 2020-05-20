import React from 'react';

function Wrapper(props) {
  return (
    <div className="wrapper d-flex w-100 h-100 p-0 mx-auto flex-column">{props.children}</div>
  );
}

export default Wrapper;
