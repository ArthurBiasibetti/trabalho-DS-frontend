import React, { useRef, useState } from 'react'
import { UploadInputProps } from './interfaces';

import style from './styles.module.scss'


export const UploadInput: React.FC<UploadInputProps> = ({onChange , ...props}) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const onDragOverHandle = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    if(!isDragOver){
      setIsDragOver(true);
    }
  }

  const onDragLeaveHandle = () => {
    setIsDragOver(false);
  }

  const onDropHandler = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragOver(false);
      if(inputRef.current) {
        inputRef.current.files = event.dataTransfer.files;
        onChangeHandle(inputRef.current.files);
      };
  }

  const onChangeHandle = (fileList: FileList) => {
    onChange(fileList[0]);
  }

  return (  
    <label>
      <div 
        className={`${style['input_wrapper']} ${isDragOver ? style['is_over'] : ''}`}
        onDrop={onDropHandler}
        onDragLeave={onDragLeaveHandle} 
        onDragOver={onDragOverHandle}
      >
        <input 
          ref={inputRef} 
          type='file' 
          onChange={(event) => event.target?.files && onChangeHandle(event.target.files)}
          className={style['input_file']}/>
        <span className={style['warning_label']}> {inputRef.current?.files ? inputRef.current.files[0]?.name : 'Enviar arquivo .csv'} </span>
      </div>
    </label>
 
  )
}
