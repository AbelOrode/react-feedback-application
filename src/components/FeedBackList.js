import { motion, AnimatePresence } from 'framer-motion'
import FeedBackItem from './FeedBackItem'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

const FeedBackList = () => {
  const { feedback } = useContext(FeedbackContext)
  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedBackItem key={item.id} item={item}></FeedBackItem>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
  // return feedback.length > 0
  //   ? feedback.map((item, index) => (
  //       <FeedBackItem handleDelete={handleDelete} key={index} item={item} />
  //     ))
  //   : ''
}

export default FeedBackList
