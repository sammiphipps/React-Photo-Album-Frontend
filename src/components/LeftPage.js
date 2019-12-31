import React from 'react'
import '../styles/LeftPage.css'
import PhotoForm from './PhotoForm'

const LeftPage = ({photo, convertDateFunction, showForm}) => {

    return(
        (photo !== undefined)
            ?<div className="leftPage">
                <h3>{photo.title}</h3>
                <img src={photo.image_url} alt={photo.title} />
                <p>Date Taken: {convertDateFunction(photo.date_taken)}</p>
            </div>
            :(showForm)
                ?<div className="leftPage"><PhotoForm /></div>
                :<div className="leftPage"></div>
    )
}

export default LeftPage