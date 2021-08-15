import React, { useState } from 'react'
import styles from "./project.module.css"
function Project() {
    const [selectedProject, setSelectedProject] = useState(0)
    const data = [
        {
            title: "Genderless Kei's - Japan's Hot",
            desc: "Set to launch on the manufacturer’s new A330neo aircraft in 2017, it’s offering lots of",
            img: require('./static/image1.jpg').default
            
        },{
            title: "Better Strategy & Quality",
            desc: "Set to launch on the manufacturer’s new A330neo aircraft in 2017, it’s offering lots of",
            img: require('./static/image2.png').default
            
        },{
            title: "Genderless Kei's - Japan's Hot",
            desc: "Set to launch on the manufacturer’s new A330neo aircraft in 2017, it’s offering lots of",
            img: require('./static/image3.jpg').default
            
        }

    ]
    return (
        <div className="text-center m-5 px-5">
            <h4 style={{color: '#FF3147'}} className="m-2"> OUR PROJECT </h4>
            <h1 className="m-2"> <strong> WHY WE ARE BEST </strong></h1>
            <div className={styles.projects}>
                <div className="d-flex align-items-center">
                    <img src={data[selectedProject].img} alt=""  className={styles.project_img}/>
                    <div className={styles.col}>
                        {
                            data.map((project, index) =>
                                <div onClick={(e) => { setSelectedProject(index);}} className={`px-4 py-4 ${index === selectedProject && styles.active}`}>
                                    <h6><strong>{project.title}</strong></h6>
                                    <p>{project.desc}</p>
                                </div>)

                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project
