import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

const FeedbackStats = () => {
  const { feedback } = useContext(FeedbackContext)

  let totalRatings =
    feedback.reduce((acc, curr) => {
      return acc + Math.round(curr.rating)
    }, 0) / feedback.length

  let totalRating = totalRatings.toFixed(2)
  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(totalRating) ? 0 : totalRating}</h4>
    </div>
  )
}

export default FeedbackStats
