import React from "react";
import Link from 'next/link';
// const defaultTheme = require('tailwindcss/defaultTheme')


export default function Page() {
  return (
    <>
		<div className="h-screen w-screen bg-radial-gradient flex flex-col justify-end items-center content-center">
			<a href='/' className="p-4 ml-5 100vh flex flex-col text-4xl font-serif opacity-70 hover:opacity-100 scale-90 hover:scale-100">Home</a>
			<a href='/' className="p-4 ml-5 100vh flex flex-col text-4xl font-serif opacity-70 hover:opacity-100 scale-90 hover:scale-100">About</a>
			<a href='/' className="p-4 ml-5 100vh flex flex-col text-4xl font-serif opacity-70 hover:opacity-100 scale-90 hover:scale-100">Education</a>
			<a href='/' className="p-4 ml-5 100vh flex flex-col text-4xl font-serif opacity-70 hover:opacity-100 scale-90 hover:scale-100">Contact</a>
		</div>
    </>
  );

}