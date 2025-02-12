import React, { useEffect } from "react";
import Hero from "../SubComponents/heroSection/hero";
import Education from "../SubComponents/Eductation/Education";
import Quotes from "../SubComponents/quotes/quotes";
import Content from "../SubComponents/content/content"
import "./pages.css";
const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="text-light">
      <Hero />
      <Education />
      <Quotes />
      <Content/>
    </div>
  );
};
export default Home;
