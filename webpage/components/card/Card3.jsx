import Image from 'next/image';
import React from 'react'
import task1 from '../../assets/task.svg';
import pl from '../../assets/pl.svg'
import message from '../../assets/message.svg'
import file from '../../assets/file.svg'
import task2 from '../../assets/taskN.svg';

export default function  ({props}) {
    var task=props.task==='true'?task1:task2
    let col="#FFFFFF"
    let text="#606C80";
    if(props.work==='Done'){
        col= "rgba(34, 197, 94, 0.1)"
        text="#16A34A"
    }
    if(props.work==='Design' ){
        col= "rgba(59, 130, 246, 0.1)"
        text="#2563EB"
    }
    if(props.work==='Development' || props.work==='Todo'){
        col= "rgba(236, 72, 153, 0.1)"
        text="#DB2777"
    }
    var num=props.taskNum?props.taskNum:1;
  return (
    <div className='mainContainer'>
    <div className='title'>
    <span className='text'>{props.title}</span>
    <span className='task'><Image src={task}/>{num}</span>
    </div>
    <div className="data">
       <div className='bubble1'>
         {props.id}
       </div>
       <div className='bubble2' style={{backgroundColor:col,color:text}}>
           {props.work}
       </div>

    </div>
    </div>
    
  )
}