const Header = (props) => {
  return (
    <div className="container">
    <header>
        <h1>{props.title}</h1>
    </header>
    </div>
  )
  
}
Header.defaultProps = {
    title : "Task Tracker"
}

export default Header