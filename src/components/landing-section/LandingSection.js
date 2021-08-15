import React from "react";
import ContactForm from "../contact-form/ContactForm";
import styles from "./landing-section.module.css";
function LandingSection() {
  return (
    <div className="d-flex my-5">
      <div className={styles.left_col}>
        <h4 className={styles.top_heading}> AWARD WINNING </h4>
        <h1 className={styles.hero_text}> DIGITAL MARKETING AGENCY </h1>
        <p className={styles.hero_paragraph}>
          Morbi sed lacus nec risus finibus feugiat et fermentum nibh.
          Pellentesque vitae ante at elit fringilla ac at purus, Morbi sed lacus
          nec risus finibus feugiat et fermentum
              </p>
              
        <button
          type="button"
          className={styles.contact}
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Contact Us
              </button>
              

        {/* On pressing the above button the contact form opens */}

              
        <ContactForm />
      </div>
      <div className={styles.columns}>
        <img
          src={require("../../static/hero.png").default}
          alt="hero"
          width="750"
          height="550"
        />
      </div>
    </div>
  );
}

export default LandingSection;
