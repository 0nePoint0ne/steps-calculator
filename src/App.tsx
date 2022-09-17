import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button';

function App() {

  const [display, setDisplay] = useState('');

  const specialAction = (value: string) => {
    console.log(value)
  }

  const addToScreen = (value: string) => {
    const newValue = display + value;
    setDisplay(newValue)
  }

  const DataTable = [
    {display: "7",value: "7", size: 1, action: addToScreen},
    {display: "8",value: "8", size: 1,  action: addToScreen},
    {display: "9",value: "9", size: 1, action: addToScreen},
    {display: "&#xF7",value: "/", size: 1, action: addToScreen},
    {display: "Undo",value: "ss", size: 2, action: specialAction},
    {display: "C",value: "3", size: 1, action: addToScreen},
    {display: "4",value: "4", size: 1, action: addToScreen},
    {display: "5",value: "5", size: 1, action: addToScreen},
    {display: "6",value: "6", size: 1, action: addToScreen},
    {display: "&#215;",value: "*", size: 1, action: addToScreen},
    {display: "&#40;",value: "(", size: 1, action: addToScreen},
    {display: "&#41;",value: ")", size: 1, action: addToScreen},
    {display: "1",value: "1", size: 1, action: addToScreen},
    {display: "2",value: "2", size: 1, action: addToScreen},
    {display: "3",value: "3", size: 1, action: addToScreen},
    {display: "-",value: "-", size: 1, action: addToScreen},
    {display: "&#215&#178;",value: "xx", size: 1},
    {display: "&radic;",value: "x2x", size: 1},
    {display: "0",value: "0", size: 1, action: addToScreen},
    {display: ".",value: ".", size: 1, action: addToScreen},
    {display: "%",value: "%", size: 1, action: addToScreen},
    {display: "+",value: "+", size: 1, action: addToScreen},
    {display: "=",value: "=", size: 2, action: specialAction},

  ]

  return (
    <div className="App">
      <input type="text" value={display} className='equation-display'/>
      <div className="btn-grid">
        {DataTable.map((values, index) => { 

        return (<Button index={index} size={values.size} display={values.display} value={values.value} trigger={addToScreen} />)
        } )}
      </div>
    </div>
  );
}

export default App;
