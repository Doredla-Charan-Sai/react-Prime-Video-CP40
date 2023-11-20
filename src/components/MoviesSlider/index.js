// Write your code here
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const {details} = props
  const settings = {
    slidesToShow: 4,
    slidesToScroll: 4,
  }
  return (
    <Slider {...settings}>
      {details.map(eachMovie => (
        <MovieItem key={eachMovie.id} details={eachMovie} />
      ))}
    </Slider>
  )
}
export default MoviesSlider
