import React from "react";
import styles from "./what-we-do.module.css";
import {ReactComponent as Icon } from "./static/icon.svg"
function Slider() {
  const images = [
    require("../what-we-do/static/1.png").default,
    require("../what-we-do/static/2.png").default,
    require("../what-we-do/static/3.png").default,
    require("../what-we-do/static/4.jpg").default,
    require("../what-we-do/static/5.jpg").default,
    require("../what-we-do/static/6.jpg").default,
    require("../what-we-do/static/7.jpg").default,
    require("../what-we-do/static/8.jpg").default,
    require("../what-we-do/static/9.jpg").default,
    require("../what-we-do/static/10.jpg").default,
    require("../what-we-do/static/11.jpg").default,
    require("../what-we-do/static/12.jpg").default,
  ];
  return (
    <div className="p-5">
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="3000"
        style={{overflowX: 'hidden',minHeight:'65vh'}}
      >
        <div class="carousel-inner" style={{overflow: 'visible',}}>
          <div className={"carousel-indicators " + styles.ind_position}>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className={styles.slider_btn + " active"}
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              className={styles.slider_btn}
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              className={styles.slider_btn}
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-item active">
            <div className="d-flex">
              {images.slice(0, 4).map((img) => {
                return (
                  <div className={"d-flex flex-column w-100 m-3 rounded " + styles.slider_img} style={{background: `url(${img})`}} name="sliderImg">
                    <Icon fill="currentColor" stroke="current"/>
                    <h3 style={{fontSize:'24px', margin: '20px'}}> WEB DEVELOPMENT </h3>
                    <p className="text-center" style={{fontSize:'16px'}}>Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque</p>
                    <a className={styles.link} href="https://fylehq.com" target="_blank"  rel="noreferrer"> Read More →</a>
                  </div>
                );
              })}
            </div>
          </div>
          <div class="carousel-item">
            <div className="d-flex">
              {images.slice(4, 8).map((img) => {
                return (
                  <div className={"d-flex flex-column w-100 m-3 rounded " + styles.slider_img} style={{background: `url(${img})`}} name="sliderImg">
                    <Icon fill="currentColor" stroke="current"/>
                    <h3 style={{fontSize:'24px', margin: '20px'}}> WEB DEVELOPMENT </h3>
                    <p className="text-center" style={{fontSize:'16px'}}>Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque</p>
                    <a className={styles.link} href="https://fylehq.com" target="_blank"  rel="noreferrer"> Read More →</a>
                  </div>
                );
              })}
            </div>
          </div>
          <div class="carousel-item">
            <div className="d-flex">
              {images.slice(8, 12).map((img) => {
                return (
                  <div className={"d-flex flex-column w-100 m-3 rounded " + styles.slider_img} style={{background: `url(${img})`}} name="sliderImg">
                    <Icon fill="currentColor" stroke="current"/>
                    <h3 style={{fontSize:'24px', margin: '20px'}}> WEB DEVELOPMENT </h3>
                    <p className="text-center" style={{fontSize:'16px'}}>Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque</p>
                    <a className={styles.link} href="https://fylehq.com" target="_blank"  rel="noreferrer"> Read More →</a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Slider;
