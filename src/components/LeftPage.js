import React from 'react'
import '../styles/LeftPage.css'

const LeftPage = ({photo, convertDateFunction}) => {

    return(
        (photo !== undefined)
            ?<div className="leftPage">
                <h3>{photo.title}</h3>
                <img src={photo.image_url} alt={photo.title} />
                <p>Date Taken: {convertDateFunction(photo.date_taken)}</p>
            </div>
            :<div className="leftPage"></div>
    )
}

export default LeftPage