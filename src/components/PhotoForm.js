import React, {Component} from 'react'
import '../styles/PhotoForm.css'

class PhotoForm extends Component {
    state = {
        title: '',
        image_url: '',
        date_taken: ''
    }

    handleChange = event => {
        const newPhoto = {}
        newPhoto[event.target.name] = event.target.value
        this.setState(newPhoto)
    }

    handleSubmit = event => {
        event.preventDefault()
        const formData = new FormData(event.target)
        const newPhoto = {
            title: formData.get('title'),
            image_url: formData.get('image_url'),
            date_taken: formData.get('date_taken')
        }
        this.props.addPhoto(newPhoto)
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <h3>Add Photo to Album</h3>
                <fieldset>
                    <label htmlFor="title">Photo Title:</label>
                    <input 
                        type="text"
                        name="title"
                        id="title"
                        value={this.state.title}
                        onChange={this.handleChange}
                    />
                </fieldset>
                <fieldset>
                    <label htmlFor="image_url">Image Url:</label>
                    <input 
                        type="text"
                        name="image_url"
                        id="image_url"
                        value={this.state.image_url}
                        onChange={this.handleChange}
                    />
                </fieldset>
                <fieldset>
                    <label htmlFor="date_taken">Date Taken:</label>
                    <input 
                        type="date"
                        name="date_taken"
                        id="date_taken"
                        value={this.state.date_taken}
                        onChange={this.handleChange}
                    />
                </fieldset>
                <input type="submit" value="Add Photo to Album" />
            </form>
        )
    }
}

export default PhotoForm