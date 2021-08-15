import React from 'react'

function Footer() {
    return (
        <div style={{ background: `url(${require('./static/NoPath.png').default})`, width:"100%", height: '300px'}} className="d-flex justify-content-center align-items-center">
            <img src={require('./static/logo.png').default} alt="logo"/>
        </div>
    )
}

export default Footer
