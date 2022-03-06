import { useState } from 'react'

const RatingSelect = ({ select }) => {
  const [selected, setSelected] = useState(10)

  const handleChange = (e) => {
    setSelected(+e.currentTarget.value)
    select(+e.currentTarget.value)
  }
  return (
    <ul className="rating">
      <li>
        <input
          type="radio"
          id="num1"
          name="rating"
          value="1"
          onChange={handleChange}
          checked={selected === 1}
        />
        <label htmlFor="num1">1</label>
      </li>
      <li>
        <input
          type="radio"
          id="num1"
          name="rating"
          value="1"
          onChange={handleChange}
          checked={selected === 1}
        />
        <label htmlFor="num1">2</label>
      </li>
      <li>
        <input
          type="radio"
          id="num1"
          name="rating"
          value="1"
          onChange={handleChange}
          checked={selected === 1}
        />
        <label htmlFor="num1">3</label>
      </li>
      <li>
        <input
          type="radio"
          id="num1"
          name="rating"
          value="1"
          onChange={handleChange}
          checked={selected === 1}
        />
        <label htmlFor="num1">4</label>
      </li>
      <li>
        <input
          type="radio"
          id="num1"
          name="rating"
          value="1"
          onChange={handleChange}
          checked={selected === 1}
        />
        <label htmlFor="num1">5</label>
      </li>
      <li>
        <input
          type="radio"
          id="num1"
          name="rating"
          value="1"
          onChange={handleChange}
          checked={selected === 1}
        />
        <label htmlFor="num1">6</label>
      </li>
      <li>
        <input
          type="radio"
          id="num1"
          name="rating"
          value="1"
          onChange={handleChange}
          checked={selected === 1}
        />
        <label htmlFor="num1">7</label>
      </li>
      <li>
        <input
          type="radio"
          id="num1"
          name="rating"
          value="1"
          onChange={handleChange}
          checked={selected === 1}
        />
        <label htmlFor="num1">8</label>
      </li>
      <li>
        <input
          type="radio"
          id="num1"
          name="rating"
          value="1"
          onChange={handleChange}
          checked={selected === 1}
        />
        <label htmlFor="num1">9</label>
      </li>
      <li>
        <input
          type="radio"
          id="num1"
          name="rating"
          value="1"
          onChange={handleChange}
          checked={selected === 1}
        />
        <label htmlFor="num1">10</label>
      </li>
    </ul>
  )
}

export default RatingSelect
