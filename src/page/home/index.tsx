import React, { useState, useEffect } from 'react';
import ClassComponent from '../../components/Class';
import small from '../../assets/imgs/small.png';
// import big from './assets/imgs/big.png';
import big from '@/assets/imgs/big.png';
import './index.css';
import './index.less';

const Home = () => {
  const [name, setName] = useState('fl');
  const [num, setNum] = useState('');
  const h2Click = () => {
    setName('h2');
  };
  const inputChange = (e: any) => {
    setNum(e.target.value);
  };
  const tsTest = (num: number) => {
    console.log(num);
  };
  useEffect(() => {
    setName('cl');
    tsTest(123);
  }, []);
  useEffect(() => {
    console.log(name);
  }, [name]);
  return (
    <div>
      <h2 className='test-h2' onClick={h2Click}>
        webpack5-react-tsx
      </h2>
      <ClassComponent />
      <img src={small} alt='小于10kb图片' />
      <img src={big} alt='大于10kb图片' />
      <input type='text' value={num} onChange={inputChange} />
    </div>
  );
};
export default Home;
