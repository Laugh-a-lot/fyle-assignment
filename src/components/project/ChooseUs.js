import React from 'react'
import styles from "./project.module.css"

function ChooseUs() {
    const chooseUs = [
        {
            icon: require('./static/icon1.png').default,
            title: 'Clarified Vision & Target',
            desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.'
        },{
            icon: require('./static/icon2.png').default,
            title: 'High Performance',
            desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.'
        },{
            icon: require('./static/icon3.png').default,
            title: 'Maintain Security',
            desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.'
        },{
            icon: require('./static/icon4.png').default,
            title: 'Better Strategy & Quality',
            desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.'
        }
    ]
    return (
        <div className="text-center m-5 px-5">
            <h4 style={{color: '#FF3147'}} className="m-2"> WHY CHOOSE US </h4>
            <h1 className="m-2"> <strong> WHY WE ARE BEST </strong></h1>
                <div className="d-flex align-items-center">
                {
                    chooseUs.map(data => {
                        return <div className={"d-flex flex-column align-items-center p-5 " + styles.cards} >
                            <img src={data.icon} alt="icon" width="70" height="70" />
                            <h6 className="my-1"><strong>{data.title}</strong></h6>
                            <p>{data.desc}</p>
                        </div>
                    })
                    }
            </div>
        </div>
    )
}

export default ChooseUs
