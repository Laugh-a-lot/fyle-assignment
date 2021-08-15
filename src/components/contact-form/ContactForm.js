import { fireEvent } from "@testing-library/react";
import React, { useState } from "react";
import styles from "./contact-form.module.css";

function ContactForm() {
  const [showAlert, setShowAlert] = useState(false);

  const handleShowAlert = (message) => {
    setShowAlert(message);
    setTimeout(() => setShowAlert(false), 4500);
  };
  const handleFormSubmission = (e) => {
    e.preventDefault();
    handleShowAlert("Loading...");
    fetch("https://getform.io/f/e112c5d7-c845-4a6f-890c-1690bf34e32f", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: e.target["email"].value,
        firstName: e.target["firstName"].value,
        lastName: e.target["lastName"].value,
      }),
    })
      .then((response) => response.json)
      .then((data) => {
        
        console.log(data);
        handleShowAlert(
          "Thank you for contacting us! We will reach out to you soon."
        );
        fireEvent.click(document.getElementById('modalToggler'));
      });
  };

  return (
    <div>
      <div
        className="modal fade"
        id="exampleModal"
        name="myModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5
                class="modal-title"
                id="exampleModalLabel"
                style={{ fontSize: "20px", fontWeight: "bold" }}
              >
                Talk to us
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                id="modalToggler"
              ></button>
            </div>
            <form class="modal-body p-3 m-3" onSubmit={handleFormSubmission}>
              <input
                type="email"
                className={"form-control me-3 " + styles.input_box}
                id="email"
                name="email"
                placeholder="Work email*"
                required
              />
              <div className="d-flex mt-3">
                <input
                  type="text"
                  className={"form-control me-3 " + styles.input_box}
                  placeholder="First name*"
                  required
                  id="firstName"
                  name="firstName"
                />

                <input
                  type="text"
                  className={"form-control me-3 " + styles.input_box}
                  placeholder="Last name*"
                  id="lastName"
                  name="lastName"
                  required
                />
              </div>
              <div className="d-flex m-3">
                <input
                  className={"form-check-input p-2 mt-1 " + styles.checkbox}
                  type="checkbox"
                  id="gridCheck1"
                  required
                />
                <label
                  className={"form-check-label m-1 " + styles.label_checkbox}
                  for="gridCheck1"
                >
                  I agree to Fyle's terms and conditions, and provide consent to
                  send me communication.
                </label>
              </div>
              <button type="submit" className={styles.submit_btn}>
                Contact Us
              </button>
            </form>
          </div>
          <div className={`${styles.toast}  ${showAlert ? styles.show : ""}`}>
            <div className={styles.img}>✔</div>
            <div className={styles.desc}>{showAlert}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
