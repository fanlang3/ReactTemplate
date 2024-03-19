import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Test = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('fl');
  const changeName = () => {
    setName('beautifulFL');
  };
  const gotoHome = () => {
    navigate('/home');
  };
  useEffect(() => {
    console.log(name);
  }, [name]);
  return (
    <div>
      <div onClick={changeName}>{name}</div>
      <div onClick={gotoHome}>回到home</div>
    </div>
  );
};
export default Test;
