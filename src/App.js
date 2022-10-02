import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [myName, setMyname] = useState("Andri");
  const [umur, setUmur] = useState(41);

  const gantinama = () => {
    setMyname("Andri Yanto")
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          nama saya: {myName} umur {umur}
        </p>
        <button onClick={gantinama} className="mt-5">Nama Lengkap</button>
        <button onClick={() => setUmur((state) => state + 2)} className="mt-2">Tambah umur</button>

      </header>
    </div>
  );
}

export default App;
