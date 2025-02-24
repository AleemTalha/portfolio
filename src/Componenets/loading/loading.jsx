import React, { useEffect, useState } from "react";
import "./loading.css";

const Loading = ({ onComplete }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      if (onComplete) onComplete();
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    show && (
      <div className="loading-screen">
        <div className="loading-line"></div>
      </div>
    )
  );
};

export default Loading;
