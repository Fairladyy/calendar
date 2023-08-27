import { Calendar } from "antd";
import React, { FC } from "react";
import { IEvent } from "../models/IEvent";
import { Dayjs } from "dayjs";
import { formatDate } from "../utils/date";

interface EventCalendarProps {
  events: IEvent[];
}

const EventCalendar: FC<EventCalendarProps> = (props) => {
  const dateCellRender = (value: Dayjs) => {
    const formatedDate = formatDate(value.toDate());
    const currentDayEvents = props.events.filter(
      (e) => e.date === formatedDate
    );

    return (
      <div>
        {currentDayEvents.map((e, index) => (
          <div key={index}>{e.description}</div>
        ))}
      </div>
    );
  };

  return <Calendar cellRender={dateCellRender} />;
};

export default EventCalendar;
