"use client";
import React from "react";
import Link from 'next/link';
import { FaGithub, FaLinkedin} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
import TimelineStruct from "./TimelineStructure";

export default function Page() {
	return (
		<>
		<div className="bg-gray-900 h-max w-screen">
			{/* Blobs */}
			<div className="sticky">
				<div className="fixed top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full opacity-70 mix-blend-multiply filter blur-xl animate-blob"></div>
				<div className="fixed top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full opacity-70 mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
				<div className="fixed -bottom-8 left-28 w-72 h-72 bg-pink-300 rounded-full opacity-70 mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
			</div>

			<div className="flex flex-row ">
				{/* Sticky Sidebar */}
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
				<div className="flex-grow overflow-y-auto flex flex-col items-center justify-center p-8">
					<div id="about" className="text-4xl">
						ABOUT
					</div>
          			<div id="education" className="text-4xl">EDUCATION 
						<TimelineStruct />
					</div>
          			<div id="project" className="text-4xl">PROJECTS</div>
        		</div>
			</div>

		</div>
		</>
	);
}