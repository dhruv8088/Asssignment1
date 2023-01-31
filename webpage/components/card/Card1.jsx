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
    if(props.work==='Design' ){
        col= "rgba(59, 130, 246, 0.1)"
        text="#2563EB"
    }
    if(props.work==='In Process' ||props.work==='To Verify'){
        col= "rgba(168, 85, 247, 0.1)"
        text=" #9333EA"
    }
    if(props.work==='Development' || props.work==='Todo'){
        col= "rgba(236, 72, 153, 0.1)"
        text="#DB2777"
    }
    if(props.work==='Done'){
        col= "rgba(34, 197, 94, 0.1)"
        text="#16A34A"
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
    <div className="avatar">
    <div className='box'>
             <div className='b'>
             <img className='i'
        src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
        alt=""
       />
             </div>
                    <div className='b'>
             <img className='i'
        src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
        alt=""
       />
             </div>
           
           
             <div className='b' id='circle'>
             5+
             </div>
             </div>
             <Image className='pl' src={pl}/>
             <div className='icons'>
             <Image className='file' src={file}/>4
             <Image className='message' src={message}/>5
             </div>
            
            </div>
    </div>
    
  )
}