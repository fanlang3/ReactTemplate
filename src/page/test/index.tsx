import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Test = () => {
  const navigate = useNavigate()
  const [name, setName] = useState('fl')
  let str = 'test'
  let num = 1
  let bool = true
  const arr1: string[] = ['a', 'b', 'c']
  let arr2: Array<number | string> = [1, 2, 3, 'a']
  const arr3 = ['a', 1, true]
  let obj: string
  const changeName = (): void => {
    setName('beautifulFL')
  }
  const gotoHome = (url: string): void => {
    navigate(url)
  }
  useEffect(() => {
    // str = 123
    str = '123'
    num = 2
    bool = false
    arr2 = ['c', 'b', 'a']
    arr2 = [2, 3, 4]
    // arr2 = [true, 3, 4]
    console.log(name, str, num, bool, arr1, arr2, arr3, obj)
  }, [name])
  return (
    <div>
      <div onClick={changeName}>{name}</div>
      <div
        onClick={() => {
          gotoHome('/home')
        }}
      >
        回到home
      </div>
    </div>
  )
}
export default Test
