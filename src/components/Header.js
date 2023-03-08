const Header = ({title}) => {
  return (
    <div className="container">
    <header>
        <h1 style={headingStyle}>{title}</h1>
    </header>
    </div>
  )
  
}
Header.defaultProps = {
    title : "Task Tracker"
}

const headingStyle = {color : "red",backgroundColor : "black"}


export default Header