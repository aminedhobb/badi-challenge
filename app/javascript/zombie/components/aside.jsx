import React from 'react';

const Aside = (props) => {
  return (
    <div className="aside">
      <div className="illustration"></div>
      <h1> Zombie Challenge !</h1>
      {props.children}
    </div>
  );
}

export default Aside;
