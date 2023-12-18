"use client";
import React from "react";
import Link from 'next/link';
import Sidebar from "./Sidebar";
import Content from "./Content";

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
				<Sidebar />

				{/* Content */}
				<Content />
			</div>

		</div>
		</>
	);
}