import Button from "./Button.js"

const Header = ({title}) => {
    const onClick = () => {
        console.log('myaw')
    }
  return (
    <div className="container">
    <header className="header">
        <h1>{title}</h1>
        <Button text="Add!" onClick={onClick} />
    </header>
    </div>
  )
  
}
Header.defaultProps = {
    title : "Task Tracker"
}


export default Header