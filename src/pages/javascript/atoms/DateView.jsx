import React from 'react'

const DateView = () => {
  const today = new Date();

  // 두개가 뭐가 다른가?
  console.log('1 : ', today)
  console.log('2 : ', today.toString())
  console.log('3 : ', today.toJSON())
  console.log('4 : ', today.toISOString())

  return (
    <div>Date</div>
  )
}

export default DateView