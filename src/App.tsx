import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Counter } from './hooks/Counter';
import { Info } from './hooks/Info';
import { ReducerCounter } from './hooks/ReducerCounter';
import { ReducerInfo } from './hooks/ReducerInfo';
import { Average } from './hooks/Average';
import { CallbackAverage } from './hooks/CallbackAverage';
import { CustomInfo } from './hooks/CustomInfo';

function App() {

  const [visible, setVisible] = useState(false);

  return (
    <div className="App">
      <Counter></Counter>
      <div style={{ height: '2px', backgroundColor: 'black', marginTop: '5px', marginBottom: '5px' }}></div>
      <button onClick={() => {
        setVisible(!visible);
      }}>
        {visible ? '숨기기' : '보이기'}
      </button>
      <hr />
      {visible && <Info></Info>}
      <hr />
      <ReducerCounter />
      <hr />
      <ReducerInfo />
      <hr />
      <Average/>
      <hr />
      <CallbackAverage/>
      <hr/>
      <CustomInfo/>
    </div>
  );
}

export default App;
