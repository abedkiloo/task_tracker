import React from 'react'
import PropTypes from 'prop-types'
import  Button  from "./Button";

const Header = ({title,text,onClick,onAddToggle,showAdd}) => {

    return (
        <header className="header">
            <h1 >{title}</h1>
            <Button onClick={onAddToggle} color={ showAdd? "red":  "green" } 
            text={ showAdd? "Close": "Add" }>Add</Button>
        </header>
    )
}
Header.defaultProps = {
    title: "Task Tracker"
}
Header.propTypes= {
    title: PropTypes.string.isRequired,
}
// const headingStyle={
//     color:"#3e3ede",

// }
export default Header