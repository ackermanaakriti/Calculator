import logo from './logo.svg';
import './App.css'; 
import {useState} from 'react'

function App() {
  const [currVal, SetcurVal]= useState('')
  const [result, setResult]= useState('');

  const ops=['/','*','+','-','.'];
  const Createdigit=()=>
  {
    const digit=[];
    for(let i=0;i<10;i++)
    {
      
      digit.push( <button onClick={()=>Handleclick(i)} value={i} key={i}>{i}</button>)
      
    }
    return digit;
    
  }
 
 
  const Handleclick=(value)=>
  {
    
    SetcurVal(currVal+value);
    
  }
 
  const Handleonchange=()=>
  {

  }
 const Handleresult=( value)=>
 {
   setResult(eval(currVal+value).toString())
   SetcurVal(...result, currVal);

 }
  
  
  return (
    <div className="App">
      <div className='input'>
       <input type='text' onChange={Handleonchange} value={currVal} />
      
      </div>
      <div className='operators'>
     <button onClick={()=>Handleclick('/')} >/</button>
     <button onClick={()=>Handleclick('*')} >*</button>
     <button onClick={()=>Handleclick('-')} >-</button>
     <button onClick={()=>Handleclick('+')} >+</button>
     <button>DEL</button>
      </div>
      <div className='digits'>
        {Createdigit()}
        
        <button onClick={()=>Handleclick('.')} >.</button>
        <button onClick={()=>Handleresult('')} >=</button>
      </div>
    </div>
  );
}

export default App;
