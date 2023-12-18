"use client";
import React from "react";
import Link from 'next/link';
import { FaGithub, FaLinkedin} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Sidebar = () => {

    return (
        <div className="sticky top-0 h-screen flex flex-col justify-center items-start pl-10">
            {/* Name & Ethos Statement */}
            <div id="home" className="justify-center content-center">
                <a href="/" className="text-4xl">Abhiram Yanamandra</a>
                <p className="mt-1">Aspiring Robotics Engineer</p>
                <p className="mt-1"> Just Do It</p>
            </div>
            <div className="mt-5">
                <a href='#about' className="flex flex-col text-xl pt-1">About</a>
                <a href='#education' className="flex flex-col text-xl pt-1">Education</a>
                <a href='#project' className="flex flex-col text-xl pt-1">Projects</a>
            </div>

            {/* Contacts */}
            <div id="contact" className="flex flex-row mt-5 items-baseline">
                <div className="mr-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                    <a href="https://github.com/AbhiramYanamandra"><FaGithub size={"2em"} /></a>
                </div>
                <div className="mr-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                    <a href="https://www.linkedin.com/in/abhiram-yanamandra-a803b7246/"><FaLinkedin size={"2.2em"} /></a>
                </div>
                <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                    <a href="https://mail.google.com/mail/u/ysabhiram@gmail.com/#compose"><IoMdMail size={"2.2em"} /></a>
                </div>
            </div>
        </div>
    );

};

export default Sidebar;