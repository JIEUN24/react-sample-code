import React, { useState } from 'react';
import styled from 'styled-components';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

const Checkbox = () => {
  const [open1, setOpen1] = useState(false)
  const [open2, setOpen2] = useState(false)
  const [open3, setOpen3] = useState(false)

  const data = [
    {
      id: 0,
      title: '멤버십 이용약관 동의',
      contents: '멤버십 필수 약관에 동의합니다. 멤버십 필수 약관에 동의합니다. 멤버십 필수 약관에 동의합니다. 멤버십 필수 약관에 동의합니다. 멤버십 필수 약관에 동의합니다.',
      status: '(필수)',
    },
    {
      id: 1,
      title: '개인정보 수집 및 이용 동의',
      contents: '반갑습니다',
      status: '(필수)',
    },
    {
      id: 2,
      title: 'SMS 및 광고성 정보 수신 동의',
      contents: '선택입니다',
      status: '(선택)',
    }
  ]

  const [checkItems, setCheckItems] = useState([]);

  // 체크박스 개별 선택하기
  const selectChecked = (checked, id) => {
    if (checked) {
      setCheckItems(item => [...item, id]);
    } else {
      setCheckItems(checkItems.filter((el) => el !== id));
    }
  };

  // 체크박스 전체 선택하기
  const allChecked = (checked) => {
    if (checked) {
      const itemList = [];
      data.forEach((el) => itemList.push(el.id));
      setCheckItems(itemList);
    }
    else {
      setCheckItems([]);
    }
  }

  return (
    <Wrap>
      <div>
        <label>
          <input type='checkbox'
            name='all-checked'
            onChange={(e) => allChecked(e.target.checked)}
            checked={checkItems.length === data.length ? true : false}
          />
          모두 동의합니다.
        </label>
        {open1 && open2 && open3 ?
          <MdOutlineKeyboardArrowUp
            size={30}
            color='gray'
            onClick={() => {
              setOpen1(!open1)
              setOpen2(!open2)
              setOpen3(!open3)
            }} />
          :
          <MdOutlineKeyboardArrowDown
            size={30}
            color='gray'
            onClick={() => {
              setOpen1(!open1)
              setOpen2(!open2)
              setOpen3(!open3)
            }} />
        }
      </div>
      <hr />
      <div>
        <label>
          <input
            type='checkbox'
            name='select-checked'
            onChange={(e) => selectChecked(e.target.checked, data[0].id)}
            checked={checkItems.includes(data[0].id) ? true : false}
          />
          <span style={{ marginRight: '5px', color: data[0].status === '(필수)' ? 'red' : 'gray' }}>{data[0].status}</span> {data[0].title}
        </label>
        {open1 ?
          <MdOutlineKeyboardArrowUp size={30} color='gray' onClick={() => {
            setOpen1(!open1)
          }} />
          :
          <MdOutlineKeyboardArrowDown size={30} color='gray' onClick={() => {
            setOpen1(!open1)
          }} />
        }
      </div>
      {open1 &&
        <ContentsWrap>
          <p>{data[0].contents}</p>
        </ContentsWrap>
      }
      <div>
        <label>
          <input
            type='checkbox'
            name='select-checked'
            onChange={(e) => selectChecked(e.target.checked, data[1].id)}
            checked={checkItems.includes(data[1].id) ? true : false}
          />
          <span style={{ marginRight: '5px', color: data[1].status === '(필수)' ? 'red' : 'gray' }}>{data[1].status}</span> {data[1].title}
        </label>
        {open2 ?
          <MdOutlineKeyboardArrowUp size={30} color='gray' onClick={() => {
            setOpen2(!open2)
          }} />
          :
          <MdOutlineKeyboardArrowDown size={30} color='gray' onClick={() => {
            setOpen2(!open2)
          }} />
        }
      </div>
      {open2 &&
        <ContentsWrap>
          <p>{data[1].contents}</p>
        </ContentsWrap>
      }
      <div>
        <label>
          <input
            type='checkbox'
            name='select-checked'
            onChange={(e) => selectChecked(e.target.checked, data[2].id)}
            checked={checkItems.includes(data[2].id) ? true : false}
          />
          <span style={{ marginRight: '5px', color: data[2].status === '(필수)' ? 'red' : 'gray' }}>{data[2].status}</span> {data[2].title}
        </label>
        {open2 ?
          <MdOutlineKeyboardArrowUp size={30} color='gray' onClick={() => {
            setOpen3(!open3)
          }} />
          :
          <MdOutlineKeyboardArrowDown size={30} color='gray' onClick={() => {
            setOpen3(!open3)
          }} />
        }
      </div>
      {open3 &&
        <ContentsWrap>
          <p>{data[2].contents}</p>
        </ContentsWrap>
      }
    </Wrap>
  )
}

const Wrap = styled.div`
  width: 400px;
  min-height: 300px;
  margin: 30px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid green;
  border-radius: 10px;
  background-color: #eaffea;
  padding-bottom: 30px;

  hr {
    width: 98%;
    border: 1px solid green;
  }

  div {
    width: 80%;
    min-height: 70px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    input {
      width: 20px;
      height: 20px;
      margin-right: 10px;
    }

    label {
      font-family: 'Pretendard';
      font-weight: 700;
      font-size: 15px;

      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }

  }
`

const ContentsWrap = styled.div`
  background-color: #FFFFFF;
  border-radius: 10px;
  flex-wrap: wrap;

  p {
    margin: 10px 20px;
    font-family: 'Pretendard';
    font-weight: 500;
    font-size: 15px;
    text-align: left;
  }
`

export default Checkbox