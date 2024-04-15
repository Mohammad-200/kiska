import React from 'react'
import './exchange.css'


function Exchange({exchangeData}) {
    console.log(exchangeData)
  return (
    <div className='exchange-container container'>
      <h1>Get into the Exchange. </h1>
      <div className="exchange-content">
        {exchangeData && exchangeData.map((image, index) => {
            return <div key={image.id} className={`content content-${index + 1}`}>
                        <img src={image.largeImageURL} alt={`exchange img ${index + 1}`}></img>
                        <p>{image.description}</p>
                    </div>
        })}
      </div>
    </div>
  )
}

export default Exchange


// my approach

{/* <div className="content content-1">
<img src='' alt='exchange image 1' autoPlay loop muted></img>
<p>explanation for image 1</p>
</div>
<div className="content content-2">
<img src='#' alt='exchange image 2' autoPlay loop muted></img>
<p>explanation for image 2</p>
</div>
<div className="content content-3">
<img src='#' alt='exchange image 3' autoPlay loop muted></img>
<p>explanation for image 3</p>
</div>
<div className="content content-4">
<img src='#' alt='exchange image 4' autoPlay loop muted></img>
<p>explanation for image 4</p>
</div> */}