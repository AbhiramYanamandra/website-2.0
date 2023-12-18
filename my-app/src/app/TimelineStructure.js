import { Timeline } from "@mui/lab";
import React from "react";
import TimelineCard from "./TimelineCard";

const TimelineStruct = () => {
    return (
        <Timeline position="alternate">
          <TimelineCard
            year="2023"
            activity="Redback Racing"
            details="Joined Redback Racing, where our car RB-23 came in 2nd place in the FSAE australasia Competition"
          />
          <TimelineCard
            year="2022-2026"
            activity="UNSW Engineering"
            details="Studying Computer Engineering at UNSW"
          />
          <TimelineCard
            year="2020-2022"
            activity="Singapore Armed Forces"
            details="Was in the Singapore Armed Forces, where I developed dashboards to view and track soldier performace and fitness"
          />
          <TimelineCard
            year="2018-2019"
            activity="High School"
            details="We had fun"
          />
        </Timeline>
      );
};

export default TimelineStruct;