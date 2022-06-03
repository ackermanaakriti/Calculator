import logo from './logo.svg';
import './App.css'; 
import {useState, useEffect} from 'react'

function App() {
  const [currVal, SetcurVal]= useState('')
  const [result, setResult]= useState('');

  const ops=['/','*','+','-','.'];
  const Createdigit=()=>
  {
    const digit=[];
    for(let i=0;i<10;i++)
    {
      
      digit.push( <button  className='mydigits' onClick={()=>Handleclick(i)} value={i} key={i}>{i}</button>)
      
    }
    return digit;
    
  }
 
 
  const Handleclick=(value)=>
  {
    SetcurVal(value);
    
    SetcurVal(currVal+value);
    
  }
 
  const Handleonchange=()=>
  {

  }
 const Handleresult=( value)=>
 {
   setResult(eval(currVal+value).toString())

  
   

 }
 
   useEffect(()=>
   {
    SetcurVal('');
   },[]);
  
 const Delfunc=()=>
 {
  SetcurVal('');
  setResult('');
 }
 const DelNum=()=>
 {
  
  const myvalue= currVal.slice(0,-1);
   SetcurVal(myvalue);
   setResult('');
 }
  
  
  return (
    <div className="App">
      <div className='myinput'>
       <input className='inputfield' type='text' onChange={Handleonchange} value={currVal}/> <span>{(result)}</span>
       
      
      </div>
      <div className='operators'>
      <button onClick={Delfunc}>AC</button>

     <button onClick={DelNum}>X</button>
     <button onClick={()=>Handleclick('/')} >/</button>
     <button onClick={()=>Handleclick('*')} >*</button>
     <button onClick={()=>Handleclick('-')} >-</button>
     <button onClick={()=>Handleclick('+')} >+</button>
     
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
