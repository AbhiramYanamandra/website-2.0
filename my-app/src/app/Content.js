"use client";
import React from "react";
import TimelineStruct from "./TimelineStructure";

const Content = () => {
    return (
        <div className="flex-grow overflow-y-auto flex flex-col items-center justify-center p-8">
            <div id="about" className="text-4xl">
                ABOUT
            </div>
            <div id="education" className="text-4xl">EDUCATION 
                <TimelineStruct />
            </div>
            <div id="project" className="text-4xl">
                PROJECTS
            </div>
        </div>
    );

};

export default Content;