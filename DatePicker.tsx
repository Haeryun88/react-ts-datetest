// import * as React from 'react';
// import { useState, useRef } from 'react';
// import DatePick, { registerLocale } from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import './DatePicker.css';

// import { ko } from 'date-fns/esm/locale';
// import getYear from 'date-fns/getYear';
// import getMonth from 'date-fns/getMonth';

// registerLocale('ko', ko);

// const DatePicker = () => {
//   const calendar = useRef(null);
//   const [startDate, setStartDate] = useState(null);
//   const [endDate, setEndDate] = useState(null);

//   const onChange = (date) => {
//     const [start, end] = date;
//     setStartDate(start);
//     setEndDate(end);
//   };
//   const [month, setMonth] = useState(new Date().getMonth());
//   const [date, setDate] = useState(new Date());

//   const handleMonthChange = (date) => {
//     setMonth(date.getMonth());
//   };
//   return (
//     <div>
//       <div>
//         <DatePick
//           withPortal
//           className="date date-record"
//           locale="ko"
//           dateFormat="yyyy.MM.dd(eee)"
//           selected={startDate}
//           // minDate={minDate}
//           // maxDate={maxDate}
//           selected={date}
//           onChange={(selectDate) => setDate(selectDate)}
//           onMonthChange={handleMonthChange}
//           useWeekdaysShort={true}
//           shouldCloseOnSelect={false}
//           // excludeDates={excludeDates}
//           ref={calendar}
//           // onInputClick={() => openDatePicker()}
//           // onChange={(date, event) => datePickHandler(date, event)}
//           dayClassName={(d) =>
//             d.getDate() === date.getDate()
//               ? 'selected-day'
//               : d.getMonth() === month
//               ? 'custom-day'
//               : 'custom-day gray-day'
//           }
//         >
//           <div className="button-container">
//             <div className="btn_ctrl btn_ctrl-cancel">취소</div>
//             <div className="btn_ctrl btn_ctrl-confirm">선택</div>
//           </div>
//         </DatePick>
//       </div>
//     </div>
//   );
// };
// export default DatePicker;

import React, { Component } from 'react';
import { getYear } from 'date-fns'; // year을 표시하기 위함입니다.
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ko from 'date-fns/locale/ko'; //한국어로
registerLocale('ko', ko); //한국어로
const _ = require('lodash'); //_.range를 표현하기 위한 겁니다.

export default funcion DatePicker() {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
    };
  }
  render() {
    const years = _.range(1990, getYear(new Date()) + 1, 1);
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]; //month표시
    return (
      <div>
        <DatePicker
          locale="ko"
          showPopperArrow={false}
          fixedHeight
          selected={this.state.startDate}
          onChange={(date) =>
            this.setState({
              startDate: date,
            })
          }
          renderCustomHeader={({
            date,
            decreaseMonth,
            increaseMonth,
            prevMonthButtonDisabled,
            nextMonthButtonDisabled,
          }) => (
            <div className="date-customheader">
              <button
                onClick={decreaseMonth}
                disabled={prevMonthButtonDisabled}
              >
                <i className="icon-arrow-left32" /> //icomoon 폰트입니다.
              </button>
              //select 안넣을 거니까 년,월 표시하는 것만 넣었습니다.
              <div className="custom-month">
                {date.getFullYear()}년 {months[date.getMonth()]}
              </div>
              <button
                onClick={increaseMonth}
                disabled={nextMonthButtonDisabled}
              >
                <i className="icon-arrow-right32" /> //icomoon폰트입니다.
              </button>
            </div>
          )}
        />
      </div>
    );
  }
}

