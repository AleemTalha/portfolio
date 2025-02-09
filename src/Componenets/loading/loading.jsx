import React from "react";
import { motion } from "framer-motion";
import "./loading.css";

const Loading = () => {
  return (
    <motion.div
      className="loading-container d-flex flex-column align-items-center justify-content-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="spinner-border text-primary loading-spinner" role="status"></div>
      <motion.p
        className="mt-3 loading-text"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        Loading projects...
      </motion.p>
    </motion.div>
  );
};

export default Loading;
