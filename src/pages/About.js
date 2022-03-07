import Card from '../components/shared/Card'
import { Link } from 'react-router-dom'
const About = () => {
  return (
    <Card>
      <div className="about">
        <h2>About Page</h2>
        <p>
          This is the about page crated by Abel&trade;. Not what you expecting?
          Kindly <Link to="/">Go Back</Link> to the homepage
        </p>
      </div>
    </Card>
  )
}

export default About
