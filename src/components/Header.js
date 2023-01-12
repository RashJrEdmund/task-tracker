import PropTypes from "prop-types"
import Button from "./Button";

const Header = ({ title }) => {
  const onClick = (e) => {
    console.log('click');
  }

  return (
    <header>
      <h1 style={ headingStyle }>{title}</h1>
      <Button color = 'green' text = 'Add' onClick={onClick} />
    </header>
  )
}

Header.defaultProps = {
  title: 'Task Tracker',
}

// CSS in Js
const headingStyle = {
  color: '#000',
  background: 'none',
  width: 'fit-content',
}

export default Header
