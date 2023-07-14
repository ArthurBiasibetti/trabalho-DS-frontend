import React, { useState } from 'react';

interface TableProps {
  data: any[];
  page?: number;
  pageLength?: number;
}

import style from './styles.module.scss';

export const Table: React.FC<TableProps> = ({
  data,
  page = 1,
  pageLength = data.length,
}) => {
  const fields = Object.keys(data[0]);

  console.log(fields);

  return (
    <div>
      <table className={style.table}>
        <thead>
          <tr>
            {fields.map((field, index) => (
              <th key={index}>{field}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((dataItem, index) => (
            <tr key={index}>
              {fields.map((field, index) => (
                <td>{dataItem[field] || ''}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
