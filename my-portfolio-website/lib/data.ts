import React from "react";
import { CgCollage, CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap, LuSchool, LuSchool2, LuScrollText } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const educationData = [

  {
    title: "Undergraduate",
    location: "Sabaragamuwa University of Sri Lanka",
    description:
      "I am following degree in BSc(Hons)Computing and Information Sysytem at Sabaragamuwa University of Sri Lanka.",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - present",
  },
  {
    title: "GCE Advanced Level Examination",
    location: "R/kuruwita Central College",
    description:
      "I passed the advanced level examination 2020.",
    icon: React.createElement(LuSchool2),
    date: "2017 - 2020",
  },
  // {
  //   title: "Full-Stack Developer",
  //   location: "Houston, TX",
  //   description:
  //     "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
  //   icon: React.createElement(FaReact),
  //   date: "2021 - present",
  // },
] as const;

export const projectsData = [
  {
    title: "AgroPulse",
    description:
      "AgroPulse is a n insects detection system that help to farmers.",
    tags: ["Figma","React", "Flask", "MongoDB", "Tailwind CSS", "TensorFlow", "Git"],
    imageUrl: corpcommentImg,
  },
  {
    title: "LMS",
    description:
      "Learning Management System for the government school",
    tags: ["Figma","React", "Node.js", "Express.js", "Tailwind CSS", "MongoDB","Git","Trello",],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;