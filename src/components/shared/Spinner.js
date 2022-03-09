import { LazyLoadImage } from 'react-lazy-load-image-component'
import spinner from '../../components/assets/Spinner-1s-200px.gif'
const Spinner = () => {
  return (
    <LazyLoadImage
      src={spinner}
      alt="loading..."
      style={{
        width: '100px',
        margin: 'auto',
        display: 'block',
      }}
    />
  )
}

export default Spinner
