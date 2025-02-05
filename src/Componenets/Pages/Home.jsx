import React , {useEffect} from "react";
import Hero from "../SubComponents/heroSection/hero";
import Education from "../SubComponents/Eductation/Education";
import Quotes from "../SubComponents/quotes/quotes";
import Likes from "../SubComponents/Likes/likes";
const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
  }, []);
  return (
    <div className="text-light">
      <Hero />
      <Education />
      <Quotes />
      <Likes />
    </div>
  );
};
export default Home;
