import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import "./projects.css";

const Projects = () => {
  const projects = useSelector((state) => state.project.projects);
  const [search, setSearch] = useState("");
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setShowResults(false);

    const timeout = setTimeout(() => {
      const filtered = projects.filter((project) =>
        project.Description.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredProjects(filtered);
      setIsLoading(false);

      setTimeout(() => {
        setShowResults(true);
      }, 500);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [search, projects]);

  const handleCategoryClick = (category) => {
    setSearch(category);
  };

  return (
    <div
      className="text-light text-center py-4 project-container"
      data-aos="fade-up"
      data-aos-duration="800"
    >
      <motion.div
        className="container d-flex justify-content-center align-items-center mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="input-group w-100 w-md-75 w-lg-50">
          <motion.input
            type="text"
            className="form-control"
            placeholder="Search projects..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <motion.button
            className="btn btn-outline-light"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <i className="bi bi-search"></i>
          </motion.button>
        </div>
      </motion.div>
      <div className="text-center d-flex justify-content-center mb-3">
        <div className="w-50 d-lg-flex justify-content-between d-none">
          {["C++", "JavaScript", "C#"].map((category) => (
            <motion.button
              key={category}
              className="project-btns px-4 py-2"
              onClick={() => handleCategoryClick(category)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </div>

      <h2>Projects</h2>

      {isLoading ? (
        <div className="spinner-container">
          <div className="spinner">
            <div className="spinner1"></div>
          </div>
        </div>
      ) : showResults ? (
        <div className="row p-0 m-0 g-3 justify-content-start position-relative">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((i, index) => (
              <motion.div
                key={i.id}
                layout
                className="col-lg-4 col-md-4 col-sm-6 position-relative project-wrapper"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                {index < filteredProjects.length - 1 && (
                  <div className="connector"></div>
                )}
                <div className="card shadow-lg border-0 project-card">
                  <div className="card-body">
                    <h5 className="card-title text-primary">{i.title}</h5>
                    <p className="card-text description">{i.Description}</p>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mb-3"
                  >
                    {/* <NavLink
                      to={`/projects/${i.id}`}
                      className="btn btn-outline-primary w-75"
                    >
                      View Details
                    </NavLink> */}
                  </motion.div>
                </div>
              </motion.div>
            ))
          ) : (
            <motion.div
              className="container text-danger"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <i className="bi bi-exclamation-triangle fs-3"></i> No projects found.
            </motion.div>
          )}
        </div>
      ) : null}
    </div>
  );
};

export default Projects;