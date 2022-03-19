import React, { useState } from 'react';
import './App.css';
// @ts-ignore
import AudioReactRecorder, { RecordState } from 'audio-react-recorder'

function App() {

  const [recordState, setRecordState] = useState(null)

 const start = () => {
    setRecordState(RecordState.START)
  }
 
  const stop = () => {
    setRecordState(RecordState.STOP
    )
  }
 const onStop = (audioData:any) => {
    console.log('audioData', audioData)
  }
  return (
    <div className="App">
      <div>
        <AudioReactRecorder canvasWidth={1000} state={recordState} onStop={onStop} />
 
        <button onClick={start}>Start</button>
        <button onClick={stop}>Stop</button>
      </div>
    </div>
  );
}

export default App;
