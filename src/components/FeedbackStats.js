const FeedbackStats = ({ feedback }) => {
  let totalRatings =
    feedback.reduce((acc, curr) => {
      return acc + curr.rating
    }, 0) / feedback.length

  totalRatings = totalRatings.toFixed(1).replace(/[.,]0$/, '')
  return (
    <div className="feedback-stats">
      <h4>{FeedbackStats.length} Reviews</h4>
      <h4>Average Rating: {isNaN(totalRatings) ? 0 : totalRatings}</h4>
    </div>
  )
}

export default FeedbackStats
