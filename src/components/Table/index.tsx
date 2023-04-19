import React, { useState } from 'react'

import style from './styles.module.scss'

export const Table: React.FC<{data: any[], fields: any[], page?: number, pageLength?: number}> = ({fields, data, page = 1, pageLength = data.length}) => {
  return (
    <div>
      <table className={style.table}>
        <thead>
          <tr>
            {fields.map((field, index) =>  <th>{field}</th> )}
          </tr>
        </thead>
        <tbody>
          { data.map((data, index ) => pageLength * page >= index && pageLength * (page -1) <= index ? (
            <tr>
                <td>{data[fields[0]]}</td>
                <td>{data[fields[1]]}</td>
                <td>{data[fields[2]]}</td>
                <td>{data[fields[3]]}</td>
                <td>{data[fields[4]]}</td>
                <td>{data[fields[5]]}</td>
                <td>{data[fields[6]]}</td>
                <td>{data[fields[7]]}</td>
                <td>{data[fields[8]]}</td>
                <td>{data[fields[9]]}</td>
                <td>{data[fields[10]]}</td>
                <td>{data[fields[11]]}</td>
                <td>{data[fields[12]]}</td>
                <td>{data[fields[13]]}</td>
                <td>{data[fields[14]]}</td>
                <td>{data[fields[15]]}</td>
                <td>{data[fields[16]]}</td>
                <td>{data[fields[17]]}</td>
              </tr>
            ): null)
          }
          </tbody>
      </table>
    </div>
  )
}
