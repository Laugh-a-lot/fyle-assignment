import React from "react";
import styles from "./what-we-do.module.css";
import Slider from './Slider'

function WhatWeDo() {
  return (
    <div className={styles.container}>
      <h3 className={styles.heading_text+ " px-5"}> WHAT WE DO </h3>
      <div className="d-flex px-5 justify-content-between">
        <h2 className="w-25" style={{fontWeight: '800'}}> SERVICES PROVIDE FOR YOU </h2>
        <strong className="w-50 ">
          Morbi sed lacus nec risus finibus feugiat et fermentum nibh.
          Pellentesque vitae ante at elit fringilla ac at purus, Morbi sed lacus
          nec risus finibus feugiat et fermentum
        </strong>
          </div>
          <Slider/>
    </div>
  );
}

export default WhatWeDo;
