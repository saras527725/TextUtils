import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import About from './Components/About';
import Alert from './Components/Alert'
function AppHarry() {
  const [currentPage, setCurrentPage] = useState('home'); // Track the current page
  const [theme, settheme] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
        setAlert(null);
    }, 1500);
}
  const checkthemecolor = () => {
    if (theme === 'light') {
      settheme('dark')
      document.body.style.backgroundColor = '#121212';
      document.body.style.color = 'white';
      showAlert("Dark mode has been enabled", "success");
    }
    // window.alert("Dark mode enabled!");
    else {
      settheme('light')
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      //window.alert("Light mode enabled!");
      showAlert("Light mode has been enabled", "success");
    }
  }


  const navigateToAbout = () => {
    setCurrentPage('about');
  };

  const navigateToHome = () => {
    setCurrentPage('home');
  };

  return (
    <>  
    <Navbar title="Textutils" abc="saras" about="About us" mode={theme} enablemode={checkthemecolor}  navigateToAbout={navigateToAbout}  navigateToHome={navigateToHome}/>
    <Alert alert={alert}/>
        <div className="container my-3">
        {/* Conditionally render the component based on current page */}
        {currentPage === 'home' && <Textform showAlert={showAlert} theme={theme} />}
        {currentPage === 'about' && <About theme={theme} />}
      </div>
      </>
  )
}

export default AppHarry