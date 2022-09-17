import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button';

function App() {
  const addToScreen = (value: string) => {
    console.log(value)
  }

  const DataTable = [
    {display: "1",value: "1", size: 1},
    {display: "2",value: "2", size: 1},
    {display: "3",value: "3", size: 1},
    {display: "&#xF7",value: "/", size: 1},
    {display: "Undo",value: "ss", size: 1},
    {display: "C",value: "3", size: 1},
    {display: "4",value: "4", size: 1},
    {display: "5",value: "5", size: 1},
    {display: "6",value: "6", size: 1},
    {display: "&#215;",value: "*", size: 1},
    {display: "&#40;",value: "(", size: 1},
    {display: "&#41;",value: ")", size: 1},
    {display: "7",value: "7", size: 1},
    {display: "8",value: "8", size: 1},
    {display: "9",value: "9", size: 1},
    {display: "-",value: "-", size: 1},
    {display: "&#215&#178;",value: "xx", size: 1},
    {display: "&radic;",value: "x2x", size: 1},
    {display: "0",value: "0", size: 1},

  ]

  return (
    <div className="App">
      <input type="text" />
      <div className="button-grid">
        {DataTable.map((values, index) => { 

        return (<Button index={index} customClass={""} display={values.display} value={values.value} trigger={addToScreen} />)
        } )}
      </div>
    </div>
  );
}

export default App;
