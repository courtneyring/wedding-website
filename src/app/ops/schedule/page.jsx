'use client'
 
import { useNextCalendarApp, ScheduleXCalendar } from '@schedule-x/react'
import { createViewDay, createViewList } from "@schedule-x/calendar";
import { createEventsServicePlugin } from '@schedule-x/events-service'
import schedule from "@/json/schedule.json";
import 'temporal-polyfill/global'
import '@schedule-x/theme-default/dist/index.css'
import { useEffect, useState } from "react";
 

const SchedulePage = ({ params }) => {
  // const allSchedules = schedule.flatMap((item) => item.schedule).filter(e => !!e.start);

 const eventsService = useState(() => createEventsServicePlugin())[0];

 const calendar = useNextCalendarApp({
   views: [createViewDay(), createViewList()],
   selectedDate: Temporal.PlainDate.from("2026-08-29"),
   weekOptions: {
     gridHeight: 2500,
   },
   dayBoundaries: {
     start: "08:00",
     end: "18:00",
   },
   events: schedule.filter(s => s.start).map((event, idx) => ({
     id: idx,
     title: event.task,
     people: event.assignees,
     start: Temporal.ZonedDateTime.from(`${event.start}[America/New_York]`),
     end: event.end
       ? Temporal.ZonedDateTime.from(`${event.end}[America/New_York]`)
       : Temporal.ZonedDateTime.from(`${event.start}[America/New_York]`).add({
           minutes: 10,
         }),
   })),
   //  [
   //    {
   //      id: "1",
   //      title: "Event 1",
   //      start: Temporal.ZonedDateTime.from(
   //        "2026-06-11T08:00:00.000-04:00[America/New_York]",
   //      ),
   //      end: Temporal.ZonedDateTime.from(
   //        "2026-06-11T08:10:00.000-04:00[America/New_York]",
   //      ),
   //    },
   //  ],
   plugins: [eventsService],
   callbacks: {
     onRender: () => {
       // get all events
       eventsService.getAll();
     },
   },
 });
 
  return (
    <div>
      <ScheduleXCalendar calendarApp={calendar} />
    </div>
  );
};

export default SchedulePage;
