import * as React from "react";
import "./timeline.css";

/**
 * @props
 * props: {
 *      role: string,
 *      organization: string,
 *      description: string,
 *      date: string
 * }
 */
const TimelineItem = ({ props }) => {
  return (
    <div class="timeline">
      <div class="timeline-left">
        <div class="title">
          {props.role} @ {props.organization}
        </div>
        <hr class="role-divider"></hr>
        <div class="description">{props.description}</div>
      </div>
      <div class="timeline-divider">
        <div class="line-left"></div>
        <div class="line-right"></div>
      </div>
      <div class="timeline-right">{props.date}</div>
    </div>
  );
};

export default TimelineItem;
