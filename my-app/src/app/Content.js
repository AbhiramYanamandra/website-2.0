"use client";
import React from "react";
import TimelineStruct from "./TimelineStructure";
import Cards from "./Cards";

const Content = () => {
    return (
        <div className="flex-grow overflow-y-auto flex flex-col items-center justify-center p-8">
            <div id="about" className="text-4xl">
                ABOUT
            </div>
            <div id="education" className="text-4xl flex flex-col items-center justify-center">EDUCATION 
                <TimelineStruct />
            </div>
            <div id="project" className="text-4xl">
                PROJECTS
                <Cards />
            </div>
        </div>
    );

};

export default Content;