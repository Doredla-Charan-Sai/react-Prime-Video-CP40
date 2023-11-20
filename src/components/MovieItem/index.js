// Write your code here
import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import 'reactjs-popup/dist/index.css'
import {IoMdClose} from 'react-icons/io'
import './index.css'

const MovieItem = props => {
  const {details} = props
  const {thumbnailUrl, videoUrl} = details
  return (
    <Popup
      modal
      trigger={<img className="thumb" src={thumbnailUrl} alt="thumbnail" />}
    >
      {close => (
        <div className="pop-cont">
          <button
            type="button"
            data-testid="closeButton"
            className="trigger-button"
            label="close"
            onClick={() => close()}
          >
            <IoMdClose className="close-icon" />
          </button>
          <ReactPlayer url={videoUrl} className="video" />
        </div>
      )}
    </Popup>
  )
}
export default MovieItem
