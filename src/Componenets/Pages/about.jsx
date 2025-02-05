import React,{useEffect} from "react";
import Typer from "../SubComponents/typingeffect/typingeffect";
import AboutMain from "../SubComponents/aboutMain/aboutMain";
import Myjourney from "../SubComponents/Myjourney/journey"
const about = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 
  return (
    <div className="text-light ">
      <AboutMain/>
      <br />
      <Myjourney/>
    </div>
  );
};

export default about;
