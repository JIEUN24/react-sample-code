import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useBeforeunload } from "react-beforeunload";

const LocalStroage = () => {

  useBeforeunload((event) => event.preventDefault());

  const [category, setCategory] = useState({})
  const [data, setData] = useState([
    { name: '매출1', amount: 0 },
    { name: '매출2', amount: 0 },
    { name: '매출3', amount: 0 },
  ])
  const [change, setChange] = useState({})
  console.log('data', data)
  console.log('change', change)

  const onChangeHandler = (e) => {
    const { name, value } = e.target
    setChange({ ...change, [name]: value })
  }

  const addCategory = (e) => {
    const { value } = e.target;
    setCategory({ ...category, name: value, amount: 0 })
  }

  const submitHandler = () => {
    setData([...data, category])
  }

  return (
    <div>
      {data.map((item, idx) => {
        return (
          <InputBox>
            <p>{item.name}</p>
            <input type='number' name={item.name} onChange={onChangeHandler} />
          </InputBox>
        )
      })}
      <p>카테고리 추가</p>
      <input placeholder='카테고리 이름' onChange={addCategory} />
      <button onClick={submitHandler}>제출</button>
      {data.map((item, idx) => {
        return (
          <div>
            <p>{item.name}</p>
            <button value={item.name} onClick={(e) => {
              const minus = e.target.value;
              setData(data.filter((ele) => ele.name !== minus))
            }}>X</button>
          </div>
        )
      })}
    </div>
  )
}

const InputBox = styled.div`
  width: 250px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

`



export default LocalStroage