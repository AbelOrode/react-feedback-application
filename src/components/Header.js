import React from 'react'

function Header({ text, bgColor, textColor, textAlign }) {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  }
  return (
    <header style={headerStyles} className="header">
      <div className="container">
        <h2 className={textAlign}>{text}</h2>
      </div>
    </header>
  )
}

Header.defaultProps = {
  text: 'A React Feedback Application',
  bgColor: 'rgba(0, 0, 0, .4)',
  textColor: '#ff6a95',
  textAlign: 'text-align: center',
}

export default Header
