import React from 'react'

const skills = [
  [
    { name: "Node.js", level: "82" },
    { name: "Express.js", level: "80" },
    { name: "MongoDB", level: "78" },
  ],
  [
    { name: "MySQL", level: "72" },
    { name: "REST APIs", level: "85" },
    { name: "Docker", level: "70" },
  ],
];

const Backend = () => {
  return (
    <div className="skills_content">
      <h3 className="skills_title">Backend Technologies/Tools</h3>
      <div className="skills_box">
        {skills.map((group, groupIdx) => (
          <div className="skills_group" key={groupIdx}>
            {group.map((skill) => (
              <div className="skills_data" key={skill.name}>
                <i className='bx bx-badge-check'></i>
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
  )
}

export default Backend
