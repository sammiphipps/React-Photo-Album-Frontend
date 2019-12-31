import React from 'react'

import AlbumCard from './AlbumCard'
const AlbumContainer = ({albums, setShowPhotos, setAlbumShowing}) => {

    const albumMap = () => {
        return albums.map(album => {
          return <AlbumCard 
                    key={album.id} 
                    id={album.id}
                    name={album.name} 
                    setShowPhotos={setShowPhotos}
                    setAlbumShowing={setAlbumShowing}
                />
        })
    }

    return (
        <>
            {albumMap()}
        </>
    )

}

export default AlbumContainer