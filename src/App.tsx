import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Html5QrcodeScanner } from 'html5-qrcode';

function App() {
  
  function onScanSuccess(decodedText: string, decodedResult: any) {
    // handle the scanned code as you like, for example:
    console.log(`Code matched = ${decodedText}`, decodedResult);
  }
  
  function onScanFailure(error: unknown) {
    // handle scan failure, usually better to ignore and keep scanning.
    // for example:
    console.warn(`Code scan error = ${error}`);
  }
  
  useEffect(() =>
  {
    let html5QrcodeScanner = new Html5QrcodeScanner(
      "scanner",
      { fps: 10, qrbox: {width: 250, height: 250} },
      /* verbose= */ false);
    html5QrcodeScanner.render(onScanSuccess, onScanFailure);
  }, [])

  return (
    <div className="App">
     <div id='scanner' style={{width: '400px'}}></div>
    </div>
  )
}

export default App
