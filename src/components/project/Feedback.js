import React from 'react'
function Feedback() {
    const feedback = [
        {
          review:
            "Jannat Tumpa The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.",
              name: 'Jannat Tumpa',
            designation:'coo, amerimar enterprises inc.'
        },
      ];
    return (
        <div className="text-center m-5 px-5">
            <h4 style={{color: '#FF3147'}} className="m-2"> CLIENT'S FEEDBACK </h4>
            <h1 className="m-2"> <strong> PEOPLE SAY'S ABOUT US ! </strong></h1>
            <div className="d-flex w-100 justify-content-center">
                <img src={require('./static/Quotemarks.svg').default} alt="" />
                {
                    feedback.map(data => {
                        return <div className={"d-flex flex-column py-5 text-start"} style={{maxWidth:"800px"}}>
                            <p>{data.review}</p>
                            <h6 className="my-1 text-uppercase" style={{ color: '#FF3147' }}><strong>{data.name}  <span style={{ color: '#808080' }}>-{data.designation}</span></strong></h6>
                        </div>
                    })
                    }
            </div>
        </div>
    )
}

export default Feedback
