import React from 'react'
import '../styles/AlbumCard.css'

const AlbumCard = ({id, name, setShowPhotos, setAlbumShowing}) => {

    const handleClick = event => {
        setAlbumShowing(id)
        setShowPhotos(true)
    }

    return(
        <div className="albumCard" onClick={handleClick}>
            <h3>{name}</h3>
        </div>
    )
}

export default AlbumCard