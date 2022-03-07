import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import Header from './components/Header'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import FeedbackData from './data/FeedbackData'
import FeedBackList from './components/FeedBackList'
import About from './pages/About'
import AboutIconLink from './components/AboutIconLink'
import { FeedbackProvider } from './context/FeedbackContext'

const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData)

  return (
    <>
      <FeedbackProvider>
        <Router>
          <Header />
          <div className="container">
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <>
                    <FeedbackForm />
                    <FeedbackStats />
                    <FeedBackList />
                    <AboutIconLink />
                  </>
                }
              ></Route>

              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </Router>
      </FeedbackProvider>
    </>
  )
}

export default App
