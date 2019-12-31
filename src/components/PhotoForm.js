import React, {Component} from 'react'
import '../styles/PhotoForm.css'

class PhotoForm extends Component {
    state = {
        title: '',
        image_url: '',
        date_taken: ''
    }

    render(){
        return (
            <>
            <h3>Add Photo to Album</h3>
            <form>
                <fieldset>
                    <label htmlFor="title">Photo Title:</label>
                    <input 
                        type="text"
                        name="title"
                        id="title"
                    />
                </fieldset>
                <fieldset>
                    <label htmlFor="image_url">Image Url:</label>
                    <input 
                        type="text"
                        name="image_url"
                        id="image_url"
                    />
                </fieldset>
                <fieldset>
                    <label htmlFor="date_taken">Date Taken:</label>
                    <input 
                        type="date"
                        name="date_taken"
                        id="date_taken"
                    />
                </fieldset>
                <input type="submit" value="Add Photo to Album" />
            </form>
            </>
        )
    }
}

export default PhotoForm