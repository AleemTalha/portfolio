import React from "react";
import Project from "../SubComponents/projectMain/projectmain";
import Projects from "../SubComponents/projects/projects";
import { useEffect } from "react";

const project = () => {
  useEffect(() => {
    window.scrollTo(0,0);
    return () => {
      
    }
  }, [])
  return (
    <div className="transition-all">
      <Project />
      <Projects />

    </div>
  );
};

export default project;