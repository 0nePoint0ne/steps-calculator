import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import Steps from './components/Steps';

const displayValue: { [key: string]: string } = {
  "0": "0",
  "1": "1",
  "2": "2",
  "3": "3",
  "4": "4",
  "5": "5",
  "6": "6",
  "7": "7",
  "8": "8",
  "9": "9",
  "/": "÷",
  "%": "%",
  "+": "+",
  "*": "×",
  ".": ".",
  "x2x": "&radic;",
  "xx": "&#215&#178;",
  "(": "(",
  ")": ")"
}


function App() {

  const [display, setDisplay] = useState('');
  const [equation, setEquation] = useState('')

  const [steps, setSteps] = useState(['2+(2 × 2)²', '2+(4)²', '2+16', '18'])

  const solve = () => {
    console.log(`${equation}`)
    setDisplay(`${eval(equation)}`)
  }

  const specialAction = (value: string) => {
    if (value === 'C') {
      setDisplay('');
      setEquation('');
    }
    else if (value === '=') {
      solve();
    }
  }

  const addToScreen = (value: string) => {
    const newDisplay = display + displayValue[value];
    const newEquation = equation + value;
    setDisplay(newDisplay)
    setEquation(newEquation)
  }

  const DataTable = [
    { display: "7", value: "7", size: 1, action: addToScreen },
    { display: "8", value: "8", size: 1, action: addToScreen },
    { display: "9", value: "9", size: 1, action: addToScreen },
    { display: "&#xF7", value: "/", size: 1, action: addToScreen },
    { display: "<", value: "<", size: 1, action: specialAction },
    { display: "C", value: "C", size: 1, action: specialAction },
    { display: "4", value: "4", size: 1, action: addToScreen },
    { display: "5", value: "5", size: 1, action: addToScreen },
    { display: "6", value: "6", size: 1, action: addToScreen },
    { display: "&#215;", value: "*", size: 1, action: addToScreen },
    { display: "&#40;", value: "(", size: 1, action: addToScreen },
    { display: "&#41;", value: ")", size: 1, action: addToScreen },
    { display: "1", value: "1", size: 1, action: addToScreen },
    { display: "2", value: "2", size: 1, action: addToScreen },
    { display: "3", value: "3", size: 1, action: addToScreen },
    { display: "-", value: "-", size: 1, action: addToScreen },
    { display: "&#215&#178;", value: "xx", size: 1 },
    { display: "&radic;", value: "x2x", size: 1 },
    { display: "0", value: "0", size: 1, action: addToScreen },
    { display: ".", value: ".", size: 1, action: addToScreen },
    { display: "%", value: "%", size: 1, action: addToScreen },
    { display: "+", value: "+", size: 1, action: addToScreen },
    { display: "=", value: "=", size: 2, action: specialAction },

  ]

  const solveTopLayerBrackets = (value:string) => {
    let layersData: {[key: number]: number} = {0: value};
    let layers: {[key: number]: string} = {0: value};
    let layer = 0;
    let strLen = value.length;



    for(let i = 0; i < strLen; i++){
      if(value[i] === '('){
        layer++;
        layers[layer] =  ;
      }
      else if(value[i] === ')'){
        layers['end'] =  i;
        layers[layer] = [...layers[layer],];
        layer--;
      }
    }

    console.log(layer)

    return value;
  }

  let bra = /[(]..*..[)]/;

  const test = (value: string) => {
    let ss = value.split(bra)
    // @ts-ignore 
    // let rr = [...value.matchAll(bra)]
    // console.log(ss);
    // console.log(rr);
    // let ee = ss.join('z');
    // console.log(ee)
    console.log(ss)

    // rr?.forEach((element: string) => {
    //   console.log(element)
    //   console.log(eval(element))
    //   ee.replace('z', `${eval(element)}`)
    // });

    // console.log(ee)

    // let len = rr.length;

    // for(let i = 0; i < len; i++){

    // }

    return ss;
  }


  return (
    <div className="App">
      <div className="row">
        <div>
          <textarea value={display} className='equation-display'>
          </textarea>
          <div className="btn-grid">
            {DataTable.map((values, index) => {

              return (<Button index={index} size={values.size} display={values.display} value={values.value} trigger={values.action} />)
            })}
          </div>
        </div>

        <Steps steps={steps} />

        {/* {equation}
      <br/>
      <br/>
      {test(equation)}
      <br/>
      <br/>
      {isolateBrackets(equation)} */}
      </div>
    </div>
  );
}

export default App;
