import { FaTimes } from 'react-icons/fa'
import Card from '../shared/Card'

const FeedBackItem = ({ item, handleDelete }) => {
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button className="close" onClick={() => handleDelete(item.id)}>
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  )
}

export default FeedBackItem