import React, { lazy, Suspense, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Class from '../../components/Class'
import { Demo1 /* , Demo2 */ } from '@/components'
import small from '@/assets/imgs/small.png'
import big from '../../assets/imgs/big.png'
import './app.css'
import './app.less'

const LazyDemo = lazy(() => import('@/components/LazyDemo')) // 使用import语法配合react的Lazy动态引入资源

function App() {
  const navigate = useNavigate()
  const [count, setCount] = useState(0)
  const [show, setShow] = useState(false)
  const onChange = (e: any) => {
    setCount(e.target.value)
  }
  const gotoHome = () => {
    navigate('/test')
  }
  // 点击事件中动态引入css, 设置show为true
  const onClick = () => {
    import('./app.css')
    setShow(true)
  }
  return (
    <div>
      <h2>webpack5-react-ts</h2>
      <Class />
      <img src={small} alt='小于10kb的图片' />
      <img src={big} alt='大于于10kb的图片' />
      <p>受控组件--被更改</p>
      <input type='text' value={count} onChange={onChange} />
      <br />
      <p>非受控组件</p>
      <input type='text' />
      <Demo1 />
      <div className='small-img'></div>
      <div className='big-img'></div>
      <h2 onClick={onClick}>展示</h2>
      {/* show为true时加载LazyDemo组件 */}
      {show && (
        <Suspense fallback={null}>
          <LazyDemo />
        </Suspense>
      )}
      <div onClick={gotoHome}>回到home</div>
    </div>
  )
}
export default App
