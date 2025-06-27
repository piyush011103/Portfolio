import React from "react";
import "./Services.css";

const servicesData = [
  {
    icon: "uil uil-web-grid services_icon",
    title: "Product Designer",
    modalTitle: "Product Designer",
    description:
      "Crafting intuitive and visually engaging user experiences tailored to real user needs. I bridge the gap between design and development to ensure seamless digital products.",
    services: [
      "I design and develop interactive User Interfaces.",
      "Web and desktop application design.",
      "I create seamless UX interactions.",
      "I enhance and align your digital brand identity.",
      "Mockups and product prototypes.",
    ],
  },
  {
    icon: "uil uil-arrow services_icon",
    title: "UI/UX Designer",
    modalTitle: "UI/UX Designer",
    description:
      "Designing user-first digital experiences that are both visually compelling and functionally seamless. I turn complex workflows into intuitive interfaces.",
    services: [
      "I turn complex workflows into simple user journeys.",
      "Data-driven design decisions.",
      "I design interfaces that guide, not confuse.",
      "Interaction design for real-world use.",
      "I craft meaningful micro-interactions.",
    ],
  },
  {
    icon: "uil uil-edit services_icon",
    title: "Visual Designer",
    modalTitle: "Visual Designer",
    description:
      "Transforming ideas into visually striking and user-friendly designs that elevate the brand and enhance user interaction.",
    services: [
      "I bring visual harmony to interfaces.",
      "Visual storytelling through design.",
      "I design pixel-perfect UI elements.",
      "Visual refinement of form-based workflows.",
      "I define visual style guides.",
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