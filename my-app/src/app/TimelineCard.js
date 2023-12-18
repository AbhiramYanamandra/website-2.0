import FreeBreakfastIcon from "@mui/icons-material/FreeBreakfast";
import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";
import { Typography } from "@mui/material";
import React from "react";


const TimelineCard = ({ year, activity, details }) => {
    return (
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          {year}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            <FreeBreakfastIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h5">{activity}</Typography>
          <Typography color="text.secondary">{details}</Typography>
        </TimelineContent>
      </TimelineItem>
    );
  };

export default TimelineCard;