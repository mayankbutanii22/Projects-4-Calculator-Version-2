import Display from './Components/Display.jsx';
import ButtonsContainer from './Components/ButtonsContainer.jsx';
import styles from './App.module.css';
import { useState } from 'react';

function App() {
  const [calVal,setCalVal] = useState("");
  const onButtonClick = (buttonText) => {
    if(buttonText === "C"){
      setCalVal("");
  }else if(buttonText === "="){
    setCalVal(eval(calVal));
  }else{
    setCalVal(calVal + buttonText);
  }
  }

  return (
    <>
    <div className={styles.calculator}>
       <Display displayValue={calVal}/>
       <ButtonsContainer onButtonClick={onButtonClick}/>
       </div>
    </>
  )
}
export default App;
