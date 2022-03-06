import { v4 as uuidv4 } from 'uuid'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import Header from './components/Header'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import FeedbackData from './data/FeedbackData'
import FeedBackList from './components/FeedBackList'
import About from './pages/About'
const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData)

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }

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
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackForm handleAdd={addFeedback} />
                  <FeedbackStats feedback={feedback} />
                  <FeedBackList
                    feedback={feedback}
                    handleDelete={deleteFeedback}
                  />
                </>
              }
            ></Route>

            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
