import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';

export default function Rating ({ score } : { score: number }) {
  const starCount = 5;
  const fullStarCount = Math.floor(score);
  const hasHalfStar = score % 1 !== 0;

  const renderStars = () => {
    const stars = [];

    for (let i = 0; i < fullStarCount; i++) {
      stars.push(
        <FontAwesomeIcon key={i} icon={faStar} className="text-yellow-500" size="lg" />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <FontAwesomeIcon key={fullStarCount} icon={faStarHalfStroke} className="text-yellow-500 half-star" size="lg" />
      );
    }

    for (let i = stars.length; i < starCount; i++) {
      stars.push(
        <FontAwesomeIcon key={i} icon={faStar} className="text-gray-300" size="lg"/>
      );
    }

    return stars;
  };

  return (
    <div className="space-y-2 mb-8">
      <div className="flex items-center space-x-2">
        <div className="flex">
          {renderStars()}
          <span className='text-gray-400 ml-2'>({score})</span>
          </div>
      </div>
    </div>
  )
}