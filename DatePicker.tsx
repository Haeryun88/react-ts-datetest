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

import React, { useState } from 'react';
import { getYear } from 'date-fns'; // year을 표시하기 위함입니다.
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ko from 'date-fns/locale/ko'; //한국어로
registerLocale('ko', ko); //한국어로
const _ = require('lodash'); //_.range를 표현하기 위한 겁니다.

const DatePicker = () => {
  const calendar = useRef(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const onChange = (date) => {
    const [start, end] = date;
    setStartDate(start);
    setEndDate(end);
  };
  const [month, setMonth] = useState(new Date().getMonth());
  const [date, setDate] = useState(new Date());

  const handleMonthChange = (date) => {
    setMonth(date.getMonth());
  };
};

export default DatePicker;
