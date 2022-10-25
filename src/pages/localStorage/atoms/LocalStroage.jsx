import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { useBeforeunload } from "react-beforeunload";

const LocalStroage = () => {
  const ref = useRef(null);
  // useBeforeunload((event) => event.preventDefault());

  const [category, setCategory] = useState({})
  const [data, setData] = useState([
    { name: '매출1', amount: 0 },
    { name: '매출2', amount: 0 },
    { name: '매출3', amount: 0 },
  ])
  const [change, setChange] = useState({})
  const [change1, setChange1] = useState([])


  const onChangeHandler = (e) => {
    const { name, value } = e.target
    setChange({ name: name, amount: value })
    // setChange([...change, { name: name, amount: value }])
  }

  const hello = () => {
    // const a = change?.map((item) => { return { name: item, amount: } })
  }

  console.log(change)
  console.log('change1', change1)

  // const addCategory = (e) => {
  //   const { value } = e.target;
  //   setCategory({ ...category, name: value, amount: 0 })
  // }

  // const submitHandler = () => {
  //   setData([...data, category])
  // }
  // const click = () => {
  // }

  return (
    <div>
      {data.map((item, idx) => {
        return (
          <InputBox>
            <p>{item.name}</p>
            <input type='number' name={item.name} onChange={onChangeHandler} ref={ref} onBlur={() => {
              setChange1([...change1, change])
              // console.log(change)
            }} />
          </InputBox>
        )
      })}
      {/* <button onClick={click}>고</button> */}
      {/* <p>카테고리 추가</p> */}
      {/* <input placeholder='카테고리 이름' onChange={addCategory} />
      <button onClick={submitHandler}>제출</button> */}
      {/* {data.map((item, idx) => {
        return (
          <div>
            <p>{item.name}</p>
            <button value={item.name} onClick={(e) => {
              const minus = e.target.value;
              setData(data.filter((ele) => ele.name !== minus))
            }}>X</button>
          </div>
        )
      })} */}
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