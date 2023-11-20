// Write your code here

import MoviesSlider from '../MoviesSlider'
import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props
  const actionMovies = moviesList.filter(
    eachMovie => eachMovie.categoryId === 'ACTION',
  )
  const comedyMovies = moviesList.filter(
    eachMovie => eachMovie.categoryId === 'COMEDY',
  )
  return (
    <div className="bg-cont">
      <img
        className="prime-img"
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
      />
      <div className="content">
        <h1 className="main-head">Action Movies</h1>
        <MoviesSlider details={actionMovies} />
        <h1 className="main-head">Comedy Movies</h1>
        <MoviesSlider details={comedyMovies} />
      </div>
    </div>
  )
}
export default PrimeVideo
