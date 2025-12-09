import React from "react";
import "./Qualification.css";

const tabs = [
  {
    label: "Experience",
    icon: "uil uil-briefcase-alt qualification_icon",
    data: [
      {
        title: "Junior Engineer Intern",
        subtitle: "Novas Arc Consulting Private Limited",
        calendar: " Aug 2025 - Present",
      },
      {
        title: "Intern",
        subtitle: "Daemonhive Technologies",
        calendar: " Apr 2025 - Sep 2025",
      },
      {
        title: "MERN Stack Trainee",
        subtitle: "GeeksforGeeks - Noida",
        calendar: " Jul 2024 - Oct 2024",
      },
    ],
  },
  {
    label: "Education",
    icon: "uil uil-graduation-cap qualification_icon",
    data: [
      {
        title: "B. Tech - CSE",
        subtitle: "Dr. APJ Abdul Kalam Technical University",
        calendar: " Sep 2021 - May 2025",
      },
      {
        title: "12th - Science",
        subtitle: "Gandhi Nagar Public School",
        calendar: " 2020 - 2021",
      },
      {
        title: "10th",
        subtitle: "Gandhi Nagar Public School",
        calendar: " 2018 - 2019",
      },
    ],
  },
];

const Qualification = () => {
  const [toggleState, setToggleState] = React.useState(1);

  return (
    <section className="qualification section" id="qualification">
      <h2 className="section_title">Qualification</h2>
      <span className="section_subtitle">My Personal Journey</span>

      <div className="qualification_container container">
        <div className="qualification_tabs">
          {tabs.map((tab, idx) => (
            <span
              key={tab.label}
              onClick={() => setToggleState(idx + 1)}
              className={`${toggleState === idx + 1 ? 'active-work ' : ''}qualification_button button-flex`}
            >
              <i className={tab.icon}></i>
              {tab.label}
            </span>
          ))}
        </div>
        <div className="qualification_sections">
          {tabs.map((tab, tabIdx) => (
            <div
              key={tab.label}
              className={
                toggleState === tabIdx + 1
                  ? "qualification_content qualification_content-active"
                  : "qualification_content"
              }
            >
              {tab.data.map((item, idx) => (
                <div className="qualification_data" key={item.title + idx}>
                  {/* Left side (odd) */}
                  {idx % 2 === 0 ? (
                    <>
                      <div>
                        <h3 className="qualification_title">{item.title}</h3>
                        <span className="qualification_subtitle">{item.subtitle}</span>
                        <div className="qualification_calender">
                          <i className="uil uil-calendar-alt"></i>
                          {item.calendar}
                        </div>
                      </div>
                      <div>
                        <span className="qualification_rounder"></span>
                        <span className="qualification_line"></span>
                      </div>
                    </>
                  ) : (
                    // Right side (even)
                    <>
                      <div></div>
                      <div>
                        <span className="qualification_rounder"></span>
                        <span className="qualification_line"></span>
                      </div>
                      <div>
                        <h3 className="qualification_title">{item.title}</h3>
                        <span className="qualification_subtitle">{item.subtitle}</span>
                        <div className="qualification_calender">
                          <i className="uil uil-calendar-alt"></i>
                          {item.calendar}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Qualification;