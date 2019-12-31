import React from 'react'
import '../styles/PhotoBook.css'

import LeftPage from './LeftPage'
import RightPage from './RightPage'

const PhotoBook = ({photos, photoShowing, goToNextPage, goToPreviousPage}) => {
    const convertDate = (date) => {
        const dateSplit = date.split("-")
        const year = dateSplit[0]
        const month = dateSplit[1]
        const day = dateSplit[2]
        return `${month}/${day}/${year}`
    }

    const handleNextPageClick = event => {
        goToNextPage(photos)
    }

    const handlePreviousPageClick = event => {
        goToPreviousPage()
    }

    const leftPageFormShow = () => {
        if(photoShowing[1] === photos.length - 1 && photos[photoShowing[1]] !== undefined){
            return true
        } else {
            return false
        }
    }

    const rightPageFormShow = () => {
        if(photoShowing[0] === photos.length - 1 && photos[photoShowing[1]] === undefined){
            return true
        } else {
            return false
        }
    }

    const rightFormShow = rightPageFormShow()
    const leftFormShow = leftPageFormShow()

    return(
        <div className="photoBook">
            <div className="pages">
                <LeftPage 
                    key="leftPage" 
                    photo={photos[photoShowing[0]]} 
                    convertDateFunction={convertDate}
                    // showForm = {leftPageFormShow}
                />
                <RightPage 
                    key="rightPage" 
                    photo={photos[photoShowing[1]]} 
                    convertDateFunction={convertDate}
                    // showForm = {rightPageFormShow}
                />
            </div>
            <div className="photoBookButtons">
                {
                    (photoShowing[0] !== 0)
                        ?<button onClick={handlePreviousPageClick}>
                            <i className="fa fa-arrow-circle-left fa-2x" aria-hidden="true"></i>
                        </button>
                        :null
                }
                {
                    (
                        photoShowing[0] <= photos.length - 2
                    )
                        ?<button onClick={handleNextPageClick}>
                            <i className="fa fa-arrow-circle-right fa-2x" aria-hidden="true"></i>
                        </button>
                        :null
                }
            </div>
        </div>
    )
}

export default PhotoBook