import Display from './comp/Display';
import ButtonContainer from './comp/ButtonContainer';
import { useRef, useState } from 'react';


function App() {
  let [CalAns,setCalAns]=useState("");
  const onButtonClick=(btnTxt)=>{

  if(btnTxt=='C'){
    setCalAns("");
  } 
  else if(btnTxt=="⬅"){

    CalAns=CalAns.toString();
    const result=CalAns.slice(0,CalAns.length-1);
    setCalAns(result);
    
  }
  else if(btnTxt=='Ans' && CalAns.length>=1){
    try{
   const result=eval(CalAns);
   if(result=="Infinity" || result=="-Infinity"){
    setCalAns("Can't divide by zero")
    setTimeout(()=>{
      setCalAns("");
    },2500);
   }
   else{
   setCalAns(result);
   }
  }
    catch(e){
      console.log(e)
      setCalAns("Invalid Expression");
      setTimeout(()=>{
        setCalAns("");
      },2500);
    }
  } 
  else{
    if(btnTxt!="Ans"){
      let newVal=CalAns+btnTxt;
      setCalAns(newVal);
    }   
  }
  }
      return ( <div className="App">
    <Display DisplayValue={CalAns} addValue={setCalAns} value={CalAns}></Display>
    <div className="">
    <ButtonContainer onButtonClick={onButtonClick}></ButtonContainer>
      </div>
  </div>
  );
}

export default App
