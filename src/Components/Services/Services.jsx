import React from "react";
import "./Services.css";

const servicesData = [
  {
    icon: "uil uil-brackets-curly services_icon",
    title: "Full Stack Developer",
    modalTitle: "Full Stack Developer",
    description:
      "I build complete web applications from frontend to backend using the MERN stack. I focus on clean architecture, real-world functionality, and performance.",
    services: [
      "Build full-stack applications using MongoDB, Express, React, and Node.js.",
      "Design and develop REST APIs for scalable systems.",
      "Implement authentication and secure backend logic.",
      "Handle data flow between frontend and backend efficiently.",
      "Develop production-ready and responsive applications.",
    ],
  },
  {
    icon: "uil uil-window services_icon",
    title: "Frontend Developer",
    modalTitle: "Frontend Developer",
    description:
      "I create responsive and user-friendly interfaces with a focus on usability and performance. I turn designs into functional and interactive applications.",
    services: [
      "Develop responsive UI using HTML, CSS, and JavaScript.",
      "Build dynamic interfaces using React.js.",
      "Manage state and data flow in frontend applications.",
      "Integrate APIs and handle real-time UI updates.",
      "Optimize UI for performance and smooth user experience.",
    ],
  },
  {
    icon: "uil uil-server-network services_icon",
    title: "Backend Developer",
    modalTitle: "Backend Developer",
    description:
      "I develop backend systems that handle data, logic, and security efficiently. I focus on building reliable APIs and scalable server-side applications.",
    services: [
      "Build RESTful APIs using Node.js and Express.js.",
      "Design and manage MongoDB databases.",
      "Implement authentication and authorization systems.",
      "Handle server-side logic and data processing.",
      "Optimize backend performance and error handling.",
    ],
  },
  {
    icon: "uil uil-desktop services_icon",
    title: "Desktop App Developer",
    modalTitle: "Desktop App Developer",
    description:
      "I build desktop applications using Electron with seamless data flow and real-world usability, focusing on productivity tools and form-based systems.",
    services: [
      "Develop desktop apps using Electron.js.",
      "Implement IPC communication between processes.",
      "Manage local data storage and synchronization.",
      "Build form-based workflows with automation.",
      "Generate PDFs and handle file system operations.",
    ],
  },
];

const Services = () => {
  const [toggleState, setToggleState] = React.useState(0);
  const toggleTab = (index) => setToggleState(index);

  return (
    <section className="services section" id="services">
      <h2 className="section_title">Services</h2>
      <span className="section_subtitle">What I Offer</span>
      <div className="services_container container grid">
        {servicesData.map((service, idx) => (
          <div className="services_content" key={service.title}>
            <div>
              <i className={service.icon}></i>
              <h3 className="services_title">
                {service.title.split(" ").map((word, i) =>
                  i === 1 ? <br key={i} /> : null
                )}
                {service.title}
              </h3>
            </div>
            <span className="services_button" onClick={() => toggleTab(idx + 1)}>
              View More
              <i className="uil uil-arrow-right services_button-icon"></i>
            </span>
            <div className={toggleState === idx + 1 ? "services_modal active-modal" : "services_modal"}>
              <div className="services_modal-content">
                <i
                  onClick={() => toggleTab(0)}
                  className="uil uil-times services_modal-close"
                ></i>
                <h3 className="services_modal-title">{service.modalTitle}</h3>
                <p className="services_modal-description">{service.description}</p>
                <ul className="services_modal-services grid">
                  {service.services.map((item, i) => (
                    <li className="services_modal-service" key={i}>
                      <i className="uil uil-check-circle services_modal-icon"></i>
                      <p className="services_modal-info">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;