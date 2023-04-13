import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { getDemo } from './api/demo'

import style from './App.module.scss'
import HttpClient from './config/axios'
import { UploadInput } from './components/UploadInput'

const uploadFile = (file: File, cb: (data: any[]) => void) => {
  const formData = new FormData();
  formData.append('file', file)
  HttpClient.api.post('/file', formData  ).then((data) => cb(JSON.parse(data.request.response).data as any[]));
}

function App() {

  const [data, setData] = useState<any[]>([]);



  return (
    <div className={style.App}>
        <div className={style['input-wrapper']}  >
          {!data.length && <UploadInput onChange={(file) => uploadFile(file, (data) => setData(data))}/>}
        </div>
        <div className={style['data-wrapper']}>
          {!!data.length && data.map((data) => <p key={data.NUMERO}>{data.NUMERO} | {data.DESCRICAO}</p>)}
        </div>
    </div>
  )
}

export default App
