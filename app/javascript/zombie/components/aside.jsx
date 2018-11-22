import React from 'react';

const Aside = (props) => {
  return (
    <div className="aside">
      <div className="illustration" style={{backgroundImage: "url('https://cdn.images.express.co.uk/img/dynamic/78/590x/WalkingDead-963583.jpg')"}}></div>
      <h1> Zombie Challenge !</h1>
      {props.children}
    </div>
  );
}

export default Aside;
