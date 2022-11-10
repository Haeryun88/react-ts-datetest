import * as React from 'react';
import { useState, useRef } from 'react';
import DatePick, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './DatePicker.css';

import { ko } from 'date-fns/esm/locale';
import getYear from 'date-fns/getYear';
import getMonth from 'date-fns/getMonth';
const _ = require('lodash'); //_.range를 표현하기 위한 겁니다.

registerLocale('ko', ko);

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

  const years = _.range(1990, getYear(new Date()) + 1, 1);
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
  ]; //month표시
  return (
    <div>
      <div>
        <DatePick
          withPortal
          className="date date-record"
          locale="ko"
          dateFormat="yyyy.MM.dd(eee)"
          selected={startDate}
          // minDate={minDate}
          // maxDate={maxDate}
          selected={date}
          onChange={(selectDate) => setDate(selectDate)}
          onMonthChange={handleMonthChange}
          useWeekdaysShort={true}
          shouldCloseOnSelect={false}
          // excludeDates={excludeDates}
          ref={calendar}
          inline={true}
          // onInputClick={() => openDatePicker()}
          // onChange={(date, event) => datePickHandler(date, event)}
          renderCustomHeader={({
            date,
            decreaseMonth,
            increaseMonth,
            prevMonthButtonDisabled,
            nextMonthButtonDisabled,
          }) => (
            <div className="date-customheader">
              <div>
                {date.getFullYear()}. {months[date.getMonth()]}
              </div>

              <button
                onClick={decreaseMonth}
                disabled={prevMonthButtonDisabled}
              >
                <i className="icon-arrow-left32" />
              </button>
              {/* //select 안넣을 거니까 년,월 표시하는 것만 넣었습니다. */}
              <div className="custom-month">
                {date.getFullYear()}. {months[date.getMonth()]}
              </div>
              <button
                onClick={increaseMonth}
                disabled={nextMonthButtonDisabled}
              >
                <i className="icon-arrow-right32" />
              </button>
            </div>
          )}
        >
          <div className="button-container">
            <div className="btn_ctrl btn_ctrl-cancel">취소</div>
            <div className="btn_ctrl btn_ctrl-confirm">선택</div>
          </div>
        </DatePick>
      </div>
    </div>
  );
};

export default DatePicker;
