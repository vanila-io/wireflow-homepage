import React, { Component } from "react";

import ScrollReveal from "scrollreveal";
import Header from "../components/Header/Header";
import Section1 from "../components/Sections/Section1";
import Section2 from "../components/Sections/Section2";
import Section3 from "../components/Sections/Section3";
import Section5 from "../components/Sections/Section5";
import Section6 from "../components/Sections/Section6";
import Section7 from "../components/Sections/Section7";
import SectionFewWords from "../components/Sections/SectionFewWords";
import ContactForm from "../components/ContactForm/ContactForm";

export default class Preview extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    const sr = new ScrollReveal();

    const logo = {
      opacity: 0,
      scale: 0.5,
      duration: 500
    };
    const hero = {
      origin: "top",
      distance: "24px",
      duration: 1500,
      scale: 1.05,
      delay: 500
    };

    const intro = {
      origin: "bottom",
      distance: "64px",
      duration: 900,
      delay: 1500,
      scale: 1
    };

    const github = {
      origin: "top",
      distance: "32px",
      duration: 600,
      delay: 1800,
      scale: 0
    };

    const fromLeft = {
      duration: 900,
      scale: 1,
      origin: "left",
      distance: "100%"
    };
    const fromRight = {
      duration: 900,
      scale: 1,
      origin: "right",
      distance: "100%"
    };
    const block = {
      origin: "bottom",
      distance: "64px",
      duration: 900,
      delay: 1700,
      scale: 1
    };
    const usageCase = {
      origin: "bottom",
      distance: "64px",
      duration: 500,
      scale: 1,
      delay: 1000
    };
    const badgeRev = {
      duration: 1000,
      opacity: 0,
      scale: 0.5,
      delay: 300,
      rotate: { x: 0, y: 360, z: 0 }
    };
    const titleSkew = {
      duration: 700,
      scale: 1,
      delay: 0,
      rotate: { x: 0, y: 0, z: 3 },
      opacity: 0
    };
    sr.reveal(".navbar-brand img", logo);
    sr.reveal(".hero", hero);
    sr.reveal(".intro", intro);
    sr.reveal(".buttonGroupHeader", github);
    sr.reveal("#section1 .colImg", fromRight, 300);
    sr.reveal("#section1 .colTxt", fromLeft, 300);
    sr.reveal(".fromBottom", usageCase);
    sr.reveal(".block", block);
    sr.reveal(".seq-1", block, 300);
    sr.reveal(".rowUsageCases .col-md-12", usageCase, 700);
    sr.reveal(".usageCard", 500);
    sr.reveal("#section4 h2", usageCase);
    sr.reveal("#section4 p", usageCase);
    sr.reveal("#section4 img", usageCase);
    sr.reveal(".sectionInner .col-md-2", badgeRev, 300);
    sr.reveal(".Animation .col-md-4", badgeRev, 300);
    sr.reveal(".headingTitle", titleSkew);
    sr.reveal(".feedbackBoxL", fromLeft);
    sr.reveal(".feedbackBoxR", fromRight);
    sr.reveal(".contactFormWrapper .container");
  }

  render() {
    return (
      <div className="mainWrapperInner">
        <div className="verticalVawes" />
        <Header />
        <Section1 />
        <Section2 />
        <Section3 />
        {/*
              <Section5 />
              <Section6 />
              <Section7 />
              <SectionFewWords />
              */}
        <ContactForm />
      </div>
    );
  }
}
