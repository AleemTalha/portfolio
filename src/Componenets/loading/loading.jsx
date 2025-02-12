import React, { useEffect, useState } from "react";
import "./loading.css";
const Loading = ({ onComplete }) => {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const loadImages = async () => {
      const imagesToLoad = [
        "/imgs/Aleem.jpg",
        "/imgs/audi 1.webp",
        "/imgs/audi 2.webp",
        "/imgs/carousel-1.webp",
        "/imgs/carousel-2.webp",
        "/imgs/cta-bg.webp",
        "/imgs/Dsa pic.png",
        "/imgs/garden 2.webp",
        "/imgs/garden.webp",
        "/imgs/hero-bg.webp",
        "/imgs/hero-img.png",
        "/imgs/laptop1.webp",
        "/imgs/me.jpg",
        "/imgs/react-bg.png",
      ];

      const imagePromises = imagesToLoad.map((src) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = resolve;
        });
      });

      await Promise.all(imagePromises);
      setTimeout(() => {
        setShow(false);
        if (onComplete) onComplete();
      }, 2500);
    };

    loadImages();
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
