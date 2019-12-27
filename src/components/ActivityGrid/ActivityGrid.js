import React from "react";
import { format, differenceInMinutes, differenceInHours } from "date-fns";

import "./styles.css";

const headers = () => (
  <thead>
    <tr>
      <th>start time</th>
      <th>end time</th>
      <th>duration</th>
      <th>description</th>
    </tr>
  </thead>
);

const ActivityGrid = ({
  data = [
    {
      startTime: new Date("2016-10-08 10:29:23"),
      description: "working on tests"
    }
  ]
}) => {
  return (
    <table>
      {headers()}
      <tbody>
        {data.map(({ startTime, endTime, description }, index) => (
          <tr key={index}>
            <td>{format(startTime, "Pp")}</td>
            <td>{endTime === undefined || format(endTime, "Pp")}</td>
            {endTime === undefined ? (
              <td>
                {differenceInHours(Date.now(), startTime)} hours,{" "}
                {differenceInMinutes(Date.now(), startTime)} minutes
              </td>
            ) : (
              <td>
                {differenceInHours(endTime, startTime)} hours,{" "}
                {differenceInMinutes(endTime, startTime)} minutes
              </td>
            )}
            <td>{description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ActivityGrid;
