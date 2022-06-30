import logo from './logo.svg';
import './App.css';
import { useCallback, useState } from 'react';
import Title from './components/Title';
import ShowCount from './components/ShowCount';
import Button from './components/Button';

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const incrementByOne = useCallback(() =>{
    setCount1((prevCount) => prevCount + 1);
  },[])

  const incrementByFive = useCallback(()=>{
    setCount2((prevCount) => prevCount + 5);
  },[]);

  const isEvenOrOdd = () =>{
    return count1 % 2 === 0;
  }

  return (
    <div className="App">
      <Title></Title>
      <span>{isEvenOrOdd()? "Even": "Odd"}</span>
      <ShowCount count={count1} title="Counter 1"></ShowCount>
      <Button handleClick={incrementByOne}>Increment by one</Button>
      <hr/>
      <ShowCount count={count2} title="Counter 2"></ShowCount>
      <Button handleClick={incrementByFive}>Increment By five</Button>
    </div>
  );
}

export default App;
