import React from 'react'
import '../styles/RightPage.css'
import PhotoForm from './PhotoForm'

const RightPage = ({photo, convertDateFunction, showForm}) => {
    return(
        (photo !== undefined)
            ?<div className="rightPage">
                <h3>{photo.title}</h3>
                <img src={photo.image_url} alt={photo.title} />
                <p>Date Taken: {convertDateFunction(photo.date_taken)}</p>
            </div>
            :(showForm)
                ?<div className="rightPage"><PhotoForm /></div>
                :<div className="rightPage"></div>  
    )
}

export default RightPage