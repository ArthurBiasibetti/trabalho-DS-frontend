import { useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import { routes } from './routes';

// import HttpClient from './config/axios';

// import { UploadInput } from './components/UploadInput'
// import { Table } from './components/Table'

// import style from './App.module.scss'

// const DATA_PER_PAGE = 50

function App() {
  // const [data, setData] = useState<any[]>([]);
  // const [fields, setFields] = useState<any[]>([]);
  // const [page, setPage] = useState<number>(1);

  // const uploadFile = (file: File) => {
  //   const formData = new FormData();
  //   formData.append('file', file)
  //   HttpClient.api.post('/file', formData  ).then((data) => {
  //     const object = JSON.parse(data.request.response)
  //     setData(object.data);
  //     setFields(object.meta.fields)
  //   });
  // }


  return (
    <RouterProvider router={routes} />

    // <div className={style.App}>
    //     {!data.length &&
    //       <div className={style['input-wrapper']}  >
    //         <UploadInput onChange={uploadFile}/>
    //       </div>
    //     }
    //      {!!data.length &&
    //      <>
    //       <div className={style['data-wrapper']}>
    //         <Table data={data} fields={fields} page={page} pageLength={DATA_PER_PAGE}/>
    //       </div>
    //        <p> Página: {Array(Math.ceil(data.length / DATA_PER_PAGE)).fill('').map((_, index ) => <span className={`${style["page-number"]} ${index + 1 === page ? style.current : '' }`} onClick={() => setPage(index + 1)}>{index + 1}</span> )}</p> 
    //      </>
    //     }
    // </div>
  )
}

export default App
