import React from 'react'

const Header = ({setShowPhotos}) => {

    const handleClick = event => {
        setShowPhotos(false)
    }

    return(
        <header onClick={handleClick}>
            <h1>Image Gallery</h1>
            <p>Showing Memories to Share</p>
        </header>
    )
}

export default Header