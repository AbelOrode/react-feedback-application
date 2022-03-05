import FeedBackItem from './FeedBackItem'

const FeedBackList = ({ feedback, handleDelete }) => {
  return feedback.length > 0
    ? feedback.map((item, index) => (
        <FeedBackItem handleDelete={handleDelete} key={index} item={item} />
      ))
    : ''
}

export default FeedBackList
