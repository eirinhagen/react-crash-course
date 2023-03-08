const Header = ({title}) => {
  return (
    <div className="container">
    <header>
        <h1 style={{color : "red",backgroundColor : "black"}}>{title}</h1>
    </header>
    </div>
  )
  
}
Header.defaultProps = {
    title : "Task Tracker"
}



export default Header