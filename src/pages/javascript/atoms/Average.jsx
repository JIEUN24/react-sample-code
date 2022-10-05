import React, { useState } from 'react'

const Average = () => {
  const list = [];
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)
  const [num3, setNum3] = useState(0)

  // 평균 구하기
  // const score = num1 + num2 + num3
  list.push(num1)
  list.push(num2)
  list.push(num3)

  const score = list?.map((item) => Number(item));
  const result = score.reduce(function add(sum, currValue) {
    return sum + currValue;
  }, 0)
  const average = (result / score.length).toFixed(1);


  return (
    <div style={{ padding: '30px 0px' }}>
      <input type='number' onChange={(e) => setNum1(e.target.value)} />
      <input type='number' onChange={(e) => setNum2(e.target.value)} />
      <input type='number' onChange={(e) => setNum3(e.target.value)} />
      <div>
        <h1>{average}점</h1>
      </div>
    </div>
  )
}

export default Average