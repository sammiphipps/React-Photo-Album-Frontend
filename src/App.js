import React, {Component} from 'react';
import './App.css';

import Header from './components/Header'
import AlbumContainer from './components/AlbumContainer'
import PhotoBook from './components/PhotoBook'

const localhostapi = "http://localhost:3000"
class App extends Component {

  state = {
    showPhotos: false, 
    albums: [],
    photos: [],
    albumShowing: 0,
    photoShowing: []
  }

  componentDidMount(){

    fetch(`${localhostapi}/albums`)
      .then(response => response.json())
      .then(albums => this.setState({ albums }))
      .then(
        fetch(`${localhostapi}/photos`)
          .then(response => response.json())
          .then(photos => this.setState({ photos }))
      )
      
  }

  setShowPhotos = (value) => {
    this.setState({showPhotos: value})
  }

  setAlbumShowing = (albumId) => {
    this.setState({albumShowing: albumId})
    this.setState({photoShowing: [0,1]})
  }

  filterPhotos = () => {
    return this.state.photos.filter(photo => photo.album_id === this.state.albumShowing)
  }

  goToNextPage = (filteredPhotos) => {
    if (this.state.photoShowing[1] < filteredPhotos.length){
      const newPagesToShow = this.state.photoShowing.map(index => index + 2)
      this.setState({photoShowing: newPagesToShow}) 
    }
  }

  goToPreviousPage = () => {
    if (this.state.photoShowing[0] !== 0){
      const newPagesToShow = this.state.photoShowing.map(index => index - 2)
      this.setState({photoShowing: newPagesToShow})
    }
  }

  addPhoto = (newPhoto) => {
    newPhoto["album_id"] = this.state.albumShowing
    fetch(`${localhostapi}/photos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPhoto)
    }).then(response => response.json())
      .then(newPhotoInfo => {
        const newPhotoArray = [...this.state.photos, newPhotoInfo]
        this.setState({photos: newPhotoArray})
      }).then(console.log("successfully posted."))
  }

  render(){
    return (
      <div className="App">
        <Header setShowPhotos={this.setShowPhotos}/> 
        <main>
          {
            (!this.state.showPhotos)
              ?<AlbumContainer 
                albums={this.state.albums} 
                setShowPhotos={this.setShowPhotos} 
                setAlbumShowing={this.setAlbumShowing}
              />
              :<PhotoBook 
                photos={this.filterPhotos()}
                photoShowing={this.state.photoShowing}
                goToNextPage={this.goToNextPage}
                goToPreviousPage={this.goToPreviousPage}
                addPhoto={this.addPhoto}
              /> 
          }
        </main>
      </div>
    )
  }
}

export default App;
