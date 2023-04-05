import './App.css';
import Break from './components/Break/Break';
import Timer from './components/Timer/Timer';
import Setting from './components/Setting/Setting';
import { useEffect, useState } from 'react';
function App() {
  const [bType,setType] = useState('pomodoro')
  const [time, setTime] = useState({
    pomodoro: 120,
    shortBreak: 5,
    longBreak: 10
  });
  const [showSettings, setShowSettings] = useState(false);

  function updateTime(type,user) {
    console.log('user',user)
    setTime(prevState => ({
      ...prevState,
      [type]: user
    }));
  }
  
  function handleSettings(){
    setShowSettings(true)
  }
  function handleCloseSettings() {
    setShowSettings(false);
  }
  return (
    <div className='container'>
      <h1>Pomodoro</h1>
      <Break setType = {setType}/>
      <Timer  pomodoro={time.pomodoro} shortBreak={time.shortBreak} longBreak={time.longBreak} bType = {bType}/>
      {showSettings && <Setting updateTime={updateTime} onClose={handleCloseSettings} />}
      <button onClick={handleSettings}>Settings</button>
    </div>
  );
}

export default App;
//time={time} setTime = {setTime}