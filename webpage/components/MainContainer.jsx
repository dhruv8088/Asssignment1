import React from 'react'
import pencil from '../assets/pencil.svg'
import pl from '../assets/pl.svg'
import P from '../assets/P.svg'
import line from '../assets/line.svg'
import square from '../assets/square.svg'
import lock from '../assets/lock.svg'
import Image from 'next/image'
import twitter from '../assets/twitter.svg'
import search from '../assets/search.svg'
import a from '../assets/1.svg'
import dots from '../assets/dots.svg'
import b from '../assets/2.svg'
import c from '../assets/3.svg'
import d from '../assets/4.svg'
import e from '../assets/5.svg'
import Card from './card/Card'
import Card1 from './card/Card1'
import Card3 from './card/Card3'

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
      <div className="backlog">
      <div className="cont">
      <span className='mainTitle'>Backlog Tasks <span className='num'>5</span></span>
      <Image src={dots}/>
      </div>
      <div className="cards"><Card props={{title:'Model Answer',task:'true',taskNum:'4',tag:"Backlog", id:"#UI007",work:"Design"}}/>
        <Card props={{title:'Create calender, chat and email pages',task:'true',taskNum:'1',tag:"Backlog", id:"#UI003",work:"Development"}}/>
        <Card props={{title:'Product Design',taskNum:'2',tag:"Backlog", id:"#BC05",work:"Project"}}/>
        <Card props={{title:'Change Email Option Process',taskNum:'2',tag:"Backlog", id:"#FTC07",work:"Project"}}/>
        <Card3 props={{title:'Post Launch Reminder/Post List',taskNum:'2', id:"#FTC09",work:"Development"}}/>  
        <div className='mainContainer'><Image src={P}/></div></div>
      </div>
      <div className="todo">
      <div className="cont">
      <span className='mainTitle'>To Do Tasks <span className='num'>3</span></span>
      <Image src={dots}/>
      </div>
      <div className="cards"><Card1 props={{title:'Model Answer',taskNum:'1', id:"#UI005",work:"Todo"}}/>
        <Card3 props={{title:'Add Authentication Pages',taskNum:'2', id:"#BC05",work:"Todo"}}/>
        <Card1 props={{title:'Profile Page Structure',taskNum:'2', id:"#UI008",work:"Todo"}}/>
        <Card props={{title:'Create calender, chat and email pages',task:'true',taskNum:'1',tag:"Backlog", id:"#UI003",work:"Development"}}/>
        <div className='mainContainer'><Image src={P}/></div></div>
      </div>
      <div className="inProcess">
      <div className="cont">
      <span className='mainTitle'>In Process <span className='num'>5</span></span>
      <Image src={dots}/>
      </div>
      <div className="cards"><Card1 props={{title:'Model Answer',taskNum:'1', id:"#002",work:"In Process"}}/>
        <Card1 props={{title:'Model Answer',taskNum:'1', id:"#002",work:"In Process"}}/>
        <div className='mainContainer'><Image src={P}/></div></div>
      </div>
      <div className="done">
      <div className="cont">
      <span className='mainTitle'>Done <span className='num'>5</span></span>
      <Image src={dots}/>
      </div>
      <div className="cards"><Card1 props={{title:'Model Answer',taskNum:'1', id:"#002",work:"Done"}}/>
        <Card3 props={{title:'Create calender, chat and email pages',taskNum:'1', id:"#002",work:"Done"}}/>
        <Card1 props={{title:'Product Design',taskNum:'1', id:"#002",work:"Done"}}/>
        <Card1 props={{title:'Model Answer',taskNum:'1', id:"#002",work:"To Verify"}}/>
        <Card3 props={{title:'Create calender, chat and email pages',taskNum:'1', id:"#002",work:"Done"}}/>
        <div className='mainContainer'><Image src={P}/></div></div>
      </div>
      </div>
    </div>
          )
}
