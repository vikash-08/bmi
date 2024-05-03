import React, {useState}from 'react'
import "./index.css"

function App(){

const [weight, setWeight] = useState(0);
const [height, setheight] = useState(0);
const [bmi, setBmi] = useState();
const [message, setmessage] = useState();



//logic for BMI Calculation
let calulateBmi = (e) =>{

  e.preventDefault()
  if (weight === 0 || height === 0) {
    window.alert("Please enter correct value")
  }

  else{
    let bmi = (weight/(height*height)*703)
    setBmi(bmi.toFixed(1))

    if (bmi<25) {
      setmessage("You are UnderWeight")      
    }

    else if (bmi>=25 && bmi<30) {
      setmessage("You are healthy")
    }

    else{
      setmessage("You are overweight")
    }
  }
}

let reload = () =>{
  window.location.reload()
}
  return(
<div className='container'>
        <div className='app'>
          <h1>BMI Calculator</h1>
          <form action="" onSubmit={calulateBmi}>
            <div className='inputElement'>
              <label htmlFor="" >Weight (lbs)</label>
              <input type="text" value={weight} placeholder='Enter Weight in lbs' onChange={(e)=>setWeight(e.target.value)}/>
            </div>

            <div className='inputElement'>
              <label htmlFor="" >Height (in)</label>
              <input type="text" value={height} placeholder='Enter Height in ft' onChange={(e)=>setheight(e.target.value)} />
            </div>

            <div className='inputElement'>
              <button type='Submit'  className='btn'>
                Submit
              </button>

              <button  className='btn' onClick={reload}>
                Reload
              </button>

              <div className='inputElement'>
                <span className='result'>
                  Your BMI is: {bmi}
                </span>
                <p>{message}</p>
              </div>
            </div>
          </form>

        </div>
      </div>
  )
}

export default App;