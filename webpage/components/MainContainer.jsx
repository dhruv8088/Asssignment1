import React from 'react'
import pencil from '../assets/pencil.svg'
import pl from '../assets/pl.svg'
import line from '../assets/line.svg'
import square from '../assets/square.svg'
import lock from '../assets/lock.svg'
import Image from 'next/image'
import twitter from '../assets/twitter.svg'
import search from '../assets/search.svg'
import a from '../assets/1.svg'
import b from '../assets/2.svg'
import c from '../assets/3.svg'
import d from '../assets/4.svg'
import e from '../assets/5.svg'

export default function MainContainer() {
  return (
    <div className="container">
    <div className='index'>
            <div className='d'>
            <span className='text'>Task Board</span>
            <span className='pencil'><Image src={pencil} /></span>
            </div>
             <div className='time'>
             <div className='timeline'  >
             Timeline
             <div className='line'></div>
             </div>
             <div className='calender' >
             Calender
             </div>
             <div className='calender'>
             Dashboard
             </div>
             <div className='calender' >
             Progress
             </div>  
             <div className='cal' >
             Forms
             </div> 
             <div className='cal' >
             More
             </div>             
             </div>
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
             <div className='b'>
             5+
             </div>
             </div>

             <Image className='pl' src={pl}/>
            </div>
      
      <div className='index2'>
      <div className='view'>
      <div className='boardview'>
      <Image src={square}/>
      <span>
      BoardView
      </span>     
       </div>
       <div className='lineview'>
        <Image src={line}/>
        <span>LineView</span>
       </div>
      </div>
      <div className='lin'></div>
      <div className='access'>
           <Image src={lock} /> &nbsp;  &nbsp; 
           <span>Access denied</span>
      </div>
      <div className='lin'></div>
      <div className='owner'>
         Owners
         <Image src={twitter} />
         <div className="twitter">Twitter Team</div>
      </div>
      <div className='search'>
      <Image src={search}/> &nbsp;  &nbsp; 
      <div className="searchbox">Search Tasks</div>

      </div>
      <div className='boxes'>
      <div className="box">
      <Image src={a}/>
      </div>
      <div className="box">
      <Image src={b}/>
        </div>
        <div className="box">
        <Image src={c}/>
        </div>
        <div className="box">
        <Image src={d}/>
        </div>
        <div className="box">
        <Image src={e}/>
        </div>
      </div>
      </div>
      <div className="tasks">
      <div className="backlog"></div>
      <div className="todo"></div>
      <div className="inProcess"></div>
      <div className="done"></div>
      </div>
    </div>
          )
}
