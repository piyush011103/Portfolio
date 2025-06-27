import React, { useEffect } from "react";
import { projectsData, projectsNav } from "./Data";
import WorkItems from "./WorkItems";

const Works = () => {
  const [item, setItem] = React.useState({ name: "all" });
  const [projects, setProjects] = React.useState([]);
  const [active, setActive] = React.useState(0);

  useEffect(() => {
    if (item.name === "all") {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter((project) => {
        return project.category.toLowerCase() == item.name;
      });
      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({name: e.target.textContent.toLowerCase()})
    setActive(index)
  }
  return (
    <div>
      {/* <div className="work_filters">
        {projectsNav.map((item, index) => {
          return (
            <span
              onClick={(e) => {
                handleClick(e, index);
              }}
              className={`${active === index ? 'active-work ' : ""}work_item`}
              key={index}
            >
              {item.name}
            </span>
          );
        })}
      </div> */}
      <div className="work_container container grid">
        {projects.map((item) => {
          return <WorkItems item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Works;
