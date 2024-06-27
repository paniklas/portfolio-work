"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

// about data
const about = {
    title: "About me",
    description: "I am a Full Stack Developer with 3 years of experience. I have a passion for learning and sharing my knowledge with others as publicly as possible. I have a deep interest in JavaScript and React. I am also a big fan of Tailwind CSS and Next.js.",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Panos Vasilopoulos"
        },
        {
            fieldName: "Phone",
            fieldValue: "+30 698 123 4567"
        },
        {
            fieldName: "Experience",
            fieldValue: "19+ Years"
        },
        {
            fieldName: "Skype",
            fieldValue: "pvasilopoulos"
        },
        {
            fieldName: "Nationality",
            fieldValue: "Greek"
        },
        {
            fieldName: "Email",
            fieldValue: "p.vasilopoulos@gmail.com"
        },
        {
            fieldName: "Freelance",
            fieldValue: "Available"
        },
        {
            fieldName: "Languages",
            fieldValue: "Greek, English, Spanish"
        },
    ]
}

// expirience data
const experience = {
    icon: "/resume/badge.svg",
    title: "My experience",
    description: "I have been working as a Full Stack Developer for 3 years. I have a passion for learning and sharing my knowledge with others as publicly as possible. I have a deep interest in JavaScript and React. I am also a big fan of Tailwind CSS and Next.js.",
    items: [
        {
            company: "Tech Solutions Inc.",
            position: "Full Stack Developer",
            duration: "2022 - Present"
        },
        {
            company: "Web Design Studio",
            position: "Front-End Developer",
            duration: "Summer 2021"
        },
        {
            company: "E-commerce StartUp",
            position: "Freelance Web Developer",
            duration: "2020 - 2021"
        },
        {
            company: "Tech Academy",
            position: "Teaching Assistant",
            duration: "2019 - 2020"
        },
        {
            company: "Digital Agency",
            position: "UX/UI Designer",
            duration: "2018 - 2019"
        },
        {
            company: "Software Development Firm",
            position: "Junior Developer",
            duration: "2017 - 2018"
        },
    ]
}

// education data
const education = {
    icon: "/resume/cap.svg",
    title: "My education",
    description: "I have a Bachelor's degree in Computer Science from the University of Athens. I have been learning and working with web technologies since 2017. I have a deep interest in JavaScript and React. I am also a big fan of Tailwind CSS and Next.js.",
    items: [
        {
            institution: "Online Course Platform",
            degree: "Full Stack Web Development Bootcamp",
            duration: "2023"
        },
        {
            company: "Codeacademy",
            position: "Front-End Track",
            duration: "2022"
        },
        {
            company: "Online Course",
            position: "Programming Course",
            duration: "2020 - 2021"
        },
        {
            company: "Tech Institute",
            position: "Certified Web Developer",
            duration: "2019"
        },
        {
            company: "Digital School",
            position: "Diploma in Graphic Design",
            duration: "2016 - 2018"
        },
        {
            company: "Community College",
            position: "Associate Degree in Computer Science",
            duration: "2014 - 2016"
        },
    ]
}

// skills data
const skills = {
    title: "My skills",
    description: "I have a Bachelor's degree in Computer Science from the University of Athens. I have been learning and working with web technologies since 2017. I have a deep interest in JavaScript and React. I am also a big fan of Tailwind",
    skillsList: [
        {
            icon: <FaHtml5 />,
            name: "html 5",
        },
        {   
            icon: <FaCss3 />,
            name: "css 3",
        },
        {
            icon: <FaJs />,
            name: "javascript",
        },
        {   
            icon: <FaReact />,
            name: "react.js",
        },
        {
            icon: <SiTailwindcss />,
            name: "tailwind css",
        },
        {
            icon: <SiNextdotjs />,
            name: "Next.js",
        },
        {
            title: "Node.js",
            icon: <FaNodeJs />
        },
        {
            title: "Figma",
            icon: <FaFigma />
        },
    ]
}

const Resume = () => {
    return (
        <div>
            <h1>Resume Page</h1>
        </div>
    )
}

export default Resume
