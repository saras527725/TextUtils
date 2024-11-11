import React from 'react'
import propType from 'prop-types'
//import {Link} from 'react-router-dom'
const Navbar = (props) => {
  return (<>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>   
  <div className="container-fluid" >
  {/* <a className="navbar-brand" href="/">{props.title}</a> when click then theme automaticlly chnge*/}
  {/* <a className="navbar-brand" >{props.title}</a> without click option*/}
    <h3 className="navbar-brand nav-link active btn" onClick={props.navigateToHome} >{props.title}</h3> {/* now we can edit whole title name into appharry.js file so it it easy to edit}  */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          {/* <a className="nav-link active" aria-current="page" href="/">Home </a> Home button change but theme also change automtic*/}
         <button className="nav-link active btn" onClick={props.navigateToHome}>Home</button> 
        </li>
        <li className="nav-item">
          {/* <a className="nav-link active"  aria-current="page" href="/">{props.about}</a>
        </li> */}
           <button className="nav-link active btn" onClick={props.navigateToAbout}>{props.about}</button>
           </li>
      </ul>
    </div>
    {/* <div className="form-check form-switch "> */}
     <div className={`form-check form-switch text-${props.mode===`light` ?`dark`:`light`}`}> {/*in this JS use because we want text color of "Mode" word (that is wriiten below 2 line) also change after dark/light color */}
  <input className="form-check-input" onClick={props.enablemode} type="checkbox" role="switch" id="flexSwitchCheckDefault"></input>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Mode</label>
</div>
  </div>
  {/* </div> */}
</nav>
  </>
  )
}
  Navbar.propType={// proptype shows the type of prop like  string, number
    title: propType.string,
    about:propType.string// it mean title/about always stirng[<Navbar title="Textutils" abc="saras" about="About us"/>]
    //and  if we change string to number Like- about={9} then it show error in Console
  }


export default Navbar
