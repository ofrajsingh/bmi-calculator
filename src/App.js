import './App.css';
import Slider from 'react-input-slider'; 
import { useState } from 'react';

function App() {
  const [weight, setWeight]= useState(50);
  const [height, setHeight]= useState(150);
  const [bmi, setBmi]= useState("22.2");

  const handleWeightChange= e=>{
    setWeight(e.x);
    let heightInMetres= height/100;
    let temp=weight/heightInMetres;
    temp/=heightInMetres;
    console.log(temp);
    setBmi(temp.toFixed(1));
  }
  const handleHeightChange= e=>{
    setHeight(e.x);
    let heightInMetres= height/100;
    let temp=weight/heightInMetres;
    temp/=heightInMetres;
    console.log(temp);
    setBmi(temp.toFixed(1));
  }

  return (
    <div className="App">
      <h1>RAJ</h1>

      <h1>Weight in Kg: {weight}</h1>
      <Slider x={weight} onChange={handleWeightChange} axis='x' xmax={200} xmin={1}/>

      <h1>Height in cm: {height}</h1>
      <Slider x={height} onChange={handleHeightChange} axis='x' xmax={300} xmin={1}/>


      <div>
        <h2>Your BMI is:</h2>
        <button>{bmi}</button>
      </div>

    </div>
  );
}

export default App;
