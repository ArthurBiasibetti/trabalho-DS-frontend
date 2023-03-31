import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { getDemo } from './api/demo'

import style from './App.module.scss'
import HttpClient from './config/axios'

const uploadFile = (file: File) => {
  const formData = new FormData();
  formData.append(file.name, file)
  console.log(formData)
  HttpClient.api.post('/file', formData);
}

function App() {

  useEffect(() => {
    getDemo().then((data) => {console.log(data)})
  }, [])

  return (
    <div className={style.App}>
        <input type='file' accept='.csv' formEncType="multipart/form-data" onChange={
          (e) => {console.log(e.target.files && e.target.files[0])
         if(e.target.files) uploadFile(e.target.files[0])}
        }/>
    </div>
  )
}

export default App
