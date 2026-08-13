"use client";

import styles from "./ScheduleBlock.module.scss";
import moment from "moment";
import { useMemo, useEffect, useState } from "react";
import { SegmentedToggle, EventList } from "@courtneyring/components-library";

const ScheduleBlock = ({ schedule }) => {
  const days = useMemo(() => {
    const dayNums = [
      ...new Set(schedule.map((item) => moment(item.startTime).day())),
    ];
    return dayNums.sort().map((day) => ({
      label: moment().day(day).format("dddd"),
      value: day,
    }));
  }, [schedule]);

  const [activeDay, setActiveDay] = useState(days[0].value);
  const filteredSchedule = useMemo(() => {
    return schedule.filter((m) => moment(m.startTime).day() === activeDay);
  }, [activeDay]);

  return (
    <>
      <SegmentedToggle options={days} defaultValue={activeDay} onChange={(e) => setActiveDay(e)}/>
      <EventList tasks={filteredSchedule} />
    </>
  );
};

export default ScheduleBlock;
