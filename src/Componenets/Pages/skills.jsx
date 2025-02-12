import React from "react";
import SkillsMain from "../SubComponents/skillsMain/skillsmain";
import Skill from "../SubComponents/SkillSquare/skills";
import { useEffect } from "react";
const skills = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="">
      <SkillsMain />
      <Skill />
    </div>
  );
};

export default skills;
