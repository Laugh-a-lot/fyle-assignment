import React from 'react'
import styles from "./project.module.css"

function Growth() {
    const chooseUs = [
        {
            icon: require('./static/heart.svg').default,
            count: 199,
            title: 'Satisfied Customers',
        },{
            icon: require('./static/clock.svg').default,
            count: 1591,
            title: 'Days of Operation',
        },{
            icon: require('./static/tick.svg').default,
            count: 283,
            title: 'Completed Projects',
        },{
            icon: require('./static/awards.svg').default,
            count: 75,
            title: 'Awards Won',
        }
    ]
    return (
        <div className="text-center m-5 px-5">
            <h4 style={{color: '#FF3147'}} className="m-2"> EXPERTS GROWTH </h4>
            <h1 className="m-2"> <strong> OUR COMPANY GROWTH </strong></h1>
                <div className="d-flex align-items-center w-100 justify-content-center">
                {
                    chooseUs.map(data => {
                        return <div className={"d-flex flex-column align-items-center p-5 " + styles.cards} style={{width:'270px', height:'233px'}}>
                            <img src={data.icon} alt="icon" width="35" height="35" />
                            <h1>{data.count}+ </h1>
                            <h6 className="my-1">{data.title}</h6>
                        </div>
                    })
                    }
            </div>
        </div>
    )
}

export default Growth
