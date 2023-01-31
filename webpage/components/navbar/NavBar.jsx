import search from '../../assets/search.svg'
import Image from 'next/image'
import enter from '../../assets/enter.svg'
import mic from '../../assets/mic.svg'
import folder from '../../assets/folder.svg'
import bell from '../../assets/bell.svg'

const NavBar = () => {
 return (
  <div className='navBar'>
   <div className='leftnav' >
   
    <div className='search'>
    <Image src={search}/> &nbsp;&nbsp;
     <input type='text' placeholder='Search......'></input>&nbsp;&nbsp;
     <Image src={enter}/> &nbsp;&nbsp;
     <Image src={mic}/>
    </div>
    
   </div>
   <div className='mic'> 
   </div>
   <div className='nav'>
    <div >
        Dashboard &nbsp;&nbsp;
        <span className='light'>My Tasks &nbsp;&nbsp; Reporting &nbsp;&nbsp; Portfolio &nbsp;&nbsp; Goals </span>
    </div>
  
   </div>
   
   
   <div className='rightnav' style={{ textDecoration: "none" }}>

  
    <div className='user'>
    <Image src={folder}/>
    <Image src={bell} />
    <div className='online'
    >
    <img
    className='bell'
        src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
        alt="asdasdsa"
       />
     <div className='red'>2</div>
     <div className='rec'></div>
    </div>

    </div>
   </div>
  </div>
 )
}

export default NavBar