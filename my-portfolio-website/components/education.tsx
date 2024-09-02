"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { educationData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

export default function Education() {
  const { ref } = useSectionInView("Education");

  return (
    <section
      id="education"
      ref={ref}
      className="scroll-mt-28 mb-28 sm:mb-40 relative" /* Added 'relative' position */
    >
      <SectionHeading>My Education</SectionHeading>
      <VerticalTimeline lineColor="">
        {educationData.map((item, index) => (
          <React.Fragment key={index}>
          <VerticalTimelineElement
            visible={true}
            contentStyle={{
              background: "#f3f4f6",
              boxShadow: "none",
              border: "1px solid rgba(0, 0, 0, 0.05)",
              textAlign: "left",
              padding: "1.5rem 2rem",
            }}
            contentArrowStyle={{
              borderRight: "0.6rem solid #ffffff",
            }}
            date={item.date}
            icon={item.icon}
            iconStyle={{
              background: "black",
              fontSize: "1.5rem",
            }}
          >
            <h3 className="font-bold capitalize text-gray-950">{item.title}</h3>
            <p className="font-normal  text-gray-950 !mt-0">{item.location}</p>
            <p className="!mt-1 !font-normal text-xs  text-gray-800 ">
              {item.description}
            </p>
          </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
      
    </section>
  );
}
