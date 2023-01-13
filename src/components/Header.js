import PropTypes from "prop-types"
import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header>
      <h1 style={ headingStyle }>{title}</h1>
      <Button color = { showAdd ? 'brown' : 'green'} text = { showAdd ? 'Close' : 'Add' } onClick={onAdd} />
    </header>
  )
}

Header.defaultProps = {
  title: 'Task Tracker',
}

// this like a variable for CSS: used on line 7
const headingStyle = {
  color: '#000',
  background: 'none',
  width: 'fit-content',
}

export default Header
