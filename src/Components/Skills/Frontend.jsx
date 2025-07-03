import React from "react";

const skills = [
  [
    { name: "HTML", level: "95" },
    { name: "CSS", level: "90" },
    { name: "JavaScript", level: "80" },
  ],
  [
    { name: "React", level: "80" },
    { name: "Bootstrap", level: "80" },
    { name: "Tailwind CSS", level: "80" },
  ],
];

const Frontend = () => {
  return (
    <div className="skills_content">
      <h3 className="skills_title">Frontend Technologies</h3>
      <div className="skills_box">
        {skills.map((group, groupIdx) => (
          <div className="skills_group" key={groupIdx}>
            {group.map((skill, idx) => (
              <div className="skills_data" key={skill.name}>
                <i className="bx bx-badge-check"></i>
                <div>
                  <h3 className="skills_name">{skill.name}</h3>
                  <div className="skills_progress-bar">
                    <div
                      className="skills_progress"
                      style={{ width: `${skill.level}%` }}
                    ></div>
{/*                     <span className="skills_level">{skill.level}%</span> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Frontend;
