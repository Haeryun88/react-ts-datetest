import * as React from 'react';
import { useState, useRef } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './DatePicker.css';
import { ko } from 'date-fns/esm/locale';
import getYear from 'date-fns/getYear';
import getMonth from 'date-fns/getMonth';
const _ = require('lodash');

const DateS = () => {
  const [startDate, setStartDate] = useState(new Date());
  const years = _.range(1990, getYear(new Date()) + 1, 1); // 수정
  const months = [
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
  ];
  const [isOpen, setIsOpen] = useState(false);
  const handleChange = (e: any) => {
    setStartDate(e);
  };

  const handleClick = (e: any) => {
    e.preventDefault();
    setIsOpen(!isOpen);
    setStartDate(new Date());
  };
  const formatDate = (d) => {
    //달력 년, 월, 일 header
    const date = new Date(d);
    const monthIndex = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${year}년 ${`0${monthIndex}`.slice(-2)}`;
  };
  return (
    <div>
      <DatePicker
        selected={startDate}
        onChange={handleChange}
        disabledKeyboardNavigation //다른 월의 같은 날짜시 자동 selected 되는 현상 방지
        locale="ko"
        inline
        popperModifiers={
          {
            //화면을  벗어나지 않도록 하는 설정
          }
        }
        popperPlacement="auto" //화면 중앙에 팝업이 출현
        renderCustomHeader={({
          date,
          changeYear,
          changeMonth,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
        }) => (
          <div
            style={{
              margin: 10,
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
              {'<'}
            </button>
            <select
              value={getYear(date)}
              onChange={({ target: { value } }) => changeYear(value)}
            >
              {years.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>

            <select
              value={months[getMonth(date)]}
              onChange={({ target: { value } }) =>
                changeMonth(months.indexOf(value))
              }
            >
              {months.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>

            <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
              {'>'}
            </button>
          </div>
        )}
      />
    </div>
  );
};

export default DateS;
