"use client";

import styles from "./ScheduleBlock.module.scss";
import moment from "moment";
import { useMemo, useEffect, useState } from "react";
import {
  SegmentedToggle,
  EventList,
  Toggle,
  Button,
} from "@courtneyring/components-library";

const HIDE_PAST_KEY = "schedule.hidePast";

const ScheduleBlock = ({ schedule, alias }) => {
  const [hidePast, setHidePast] = useState(false);
  const [hasHydrated, setHasHydrated] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(HIDE_PAST_KEY);
    if (stored !== null) {
      setHidePast(stored === "true");
    }
    setHasHydrated(true);
  }, []);

  useEffect(() => {
    if (!hasHydrated) return;
    window.localStorage.setItem(HIDE_PAST_KEY, String(hidePast));
  }, [hidePast, hasHydrated]);

  const days = useMemo(() => {
    const dayNums = [
      ...new Set(schedule.map((item) => moment(item.startTime).day())),
    ];
    return dayNums.sort().map((day) => ({
      label: moment().day(day).format("dddd"),
      value: day,
    }));
  }, [schedule]);

  const [activeDay, setActiveDay] = useState(() => {
    const today = moment().day();
    const matchesToday = days.some((d) => d.value === today);
    return matchesToday ? today : days[0]?.value;
  });

  const filteredSchedule = useMemo(() => {
    return schedule.filter(
      (m) =>
        m.startTime &&
        moment(m.startTime).day() === activeDay &&
        (hidePast
          ? m.endTime
            ? moment(m.endTime).isSameOrAfter(moment())
            : moment(m.startTime).isSameOrAfter(moment())
          : true),
    );
  }, [schedule, activeDay, hidePast]);

  return (
    <>
      {days.length > 1 && (
        <div className={styles.toggleWrapper}>
          <SegmentedToggle
            options={days}
            defaultValue={activeDay}
            onChange={(e) => setActiveDay(e)}
          />
        </div>
      )}
      <div className={styles.actions}>
        <Toggle
          label="Hide past events"
          className={styles.toggle}
          checked={hidePast}
          onChange={setHidePast}
        />
        <Button
          href={alias ? `/pdfs/schedule-${alias}.pdf` : '/pdfs/schedule-full.pdf'}
          variation="link"
          className={styles.download}
        >
          Download PDF{" "}
          <span className="material-symbols-outlined">download</span>
        </Button>
      </div>

      <EventList tasks={filteredSchedule} />
    </>
  );
};

export default ScheduleBlock;
