import React from 'react'

const Header = ({setShowPhotos}) => {

    const handleClick = event => {
        setShowPhotos(false)
    }

    return(
        <header onClick={handleClick}>
            <h1>Photo Album</h1>
            <p>Showcasing Memories to Share Around the World</p>
        </header>
    )
}

export default Header