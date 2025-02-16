import React from 'react';
import './App.css';

function App() {
  return <div style={{"backgroundColor":"grey", "height":"100vh"}}>
      {/* ---------------------------------------------- Heading */}
      <div style={{"backgroundColor":"pink", height: "50px"}}>
        Heading
      </div>
      {/* ---------------------------------------------- Content */}
      <div style={{"backgroundColor":"#ccc","height":"100%","display":"flex"}}>
        <div style={{"backgroundColor":"#299","flex":"0 1 auto"}}>Directory</div>
        <div style={{"backgroundColor":"#355","flex":"1 1 auto"}}>Content</div>
      </div>
  </div>;
}

export default App;
