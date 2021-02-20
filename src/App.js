import FetchProducts from './FetchProducts'
import './App.css';
import CallToAction from './CallToAction';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

let numberOfSims = ['2','3','4','5'];
let dataArray = ['1GB','6GB','15GB','40GB','60GB','100GB'];

function App() {

  const [sim, setSim] = useState("2");
  const [data, setdata] = useState("1GB");

  function handleSimClick(event) {
    ReactDOM.findDOMNode(event.target).parentNode.parentNode.childNodes.forEach(function(el) {
      if (el.firstChild.classList !== undefined) {
        el.firstChild.classList.remove("active");
      }
    })
    event.target.classList.toggle("active");
    setSim(event.target.id);
  }

  function handleDataClick(event) {
    ReactDOM.findDOMNode(event.target).parentNode.parentNode.childNodes.forEach(function(el) {
      if (el.firstChild.classList !== undefined) {
        el.firstChild.classList.remove("active");
      }
    })
    event.target.classList.toggle("active");
    setdata(event.target.id);
  }

  return (
    <div className="Main">
        <h1>Exercise 2</h1>
        <div className="Sim-Module">
          <h2>How many SIMs do you need?</h2>
          <p>Each extra SIM has a 20% discount</p>
          {numberOfSims.map((item,index) => {            
            return(
              <CallToAction key={index} clickEvent={handleSimClick} label={item}/>
            );
          })}
        </div>
        <div className="Data-Module">
          <h2>How much data would you like per SIM?</h2>
          {dataArray.map((item,index) => {
            return(
              <CallToAction key={index} clickEvent={handleDataClick} label={item} />
            );
          })}
        </div>
        <div className="Product-Card-Section">
          <FetchProducts simCount={sim} dataValue={data}/>
        </div>
      </div>
  );
}

export default App;
