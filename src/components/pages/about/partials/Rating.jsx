import { FaCircle, FaRegCircle } from 'react-icons/fa';
import './Rating.scss';

function Rating({ points=5, stars=0 }) {

const createRating = () => {
  let rating = []

  for (let i = 0; i < points; i++) {
    rating.push(
      <span>
        { i < Number(stars) ? <FaCircle /> : <FaRegCircle /> }
      </span>
    )
  }
  return rating
}

return (
  <span className="rating">
    {createRating()}
  </span>
);
}

export default Rating;