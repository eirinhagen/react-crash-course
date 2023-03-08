import Button from "./Button.js"

const Header = ({title}) => {
  return (
    <div className="container">
    <header className="header">
        <h1>{title}</h1>
        <Button color="green" text="Hello!" />
        <Button color="red" text="hi!" />
        <Button color="blue" text="im a button"/>
    </header>
    </div>
  )
  
}
Header.defaultProps = {
    title : "Task Tracker"
}


export default Header