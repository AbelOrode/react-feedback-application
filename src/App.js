import { useState } from 'react'
import Header from './components/Header'

import FeedbackData from './data/FeedbackData'
import FeedBackList from './components/FeedBackList'
const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData)

  const deleteFeedback = (id) => {
    if (window.confirm('Sure about deleting this record?')) {
      setFeedback(
        feedback.filter((item) => {
          return item.id !== id
        })
      )
    }
  }
  return (
    <>
      <div className="container">
        <Header />
        <FeedBackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  )
}

export default App
