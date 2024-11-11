// import React from 'react';
// import ReactDOM from 'react-dom/client';  // React 18 import
// import App from './App';
// import App1 from './App1';
// import App3 from './App3';
// import AppHarry from './AppHarry';
// //import reportWebVitals from './reportWebVitals';

// const selectedApp = 1;  // Change this value to 0, 1, 2, or 3 to select the component to render

// let ComponentToRender;

// switch (selectedApp) {
//   case 1:
//     ComponentToRender = App1;
//     break;
//   case 2:
//     ComponentToRender = App3;
//     break;
//   case 3:
//     ComponentToRender = AppHarry;
//     break;
//   default:
//     ComponentToRender = App;
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <ComponentToRender />
//   </React.StrictMode>
// );

// //reportWebVitals();
import React from 'react';
import ReactDOM from 'react-dom/client';
import AppHarry from './AppHarry'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppHarry/>
  </React.StrictMode>
);
