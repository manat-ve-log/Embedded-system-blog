
import './Navbar.css'

function Navbar() {

  return (
    <>
    <div style={{position:'sticky',top:'0',left:'0',background:'red',width:'100%',display:'flex',zIndex:'1000'}}>
      <div className="nav" >
        <div className="logo">
          {/* Add your logo or brand name here */}
          <p>Embedded System</p>
        </div>
        <div className="op">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </div>
    </>
  )
}

export default Navbar