import dashboard from '../../assets/dashboard.svg'
import Image from 'next/image'
import uparrow from '../../assets/uparrow.svg'
import inbox from '../../assets/inbox.svg'
import drive from '../../assets/drive.svg'
import board from '../../assets/board.svg'
import updates from '../../assets/update.svg'
import analytic from '../../assets/analytic.svg'
import crm from '../../assets/crm.svg'
import ecommerce from '../../assets/ecommerce.svg'
import cryptocurrency from '../../assets/cryptocurrency.svg'
import projects from '../../assets/projects.svg'
import nft from '../../assets/nft.svg'
import setting from '../../assets/settings.svg'
import hash from '../../assets/hash.svg'
import plus from '../../assets/plus.svg'

const LeftBar = () => {
 return (
  <div className='leftBar'>
   <div className='container'>
   <div className="dashboard">
   <span className='dashicon' >  Dashboard <Image src={dashboard}/></span>
   </div>
   <hr />
    <div className="menu">
     <div className='user'>
     <img
        src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
        alt=""
        height="40px" width="40px"
       />
      <span className='john'>John Doe
      <br /><div className='designer'>Designer</div>
      </span>
     </div>
     <hr />
     <div className='item'>
      
      <span className='dash'>Dashboard</span>
      <Image className='uparrow' src={uparrow} height="5px" width="5px"/>
     </div>
     <div className='item'>
     <Image  src={inbox} height="5px" width="5px"/>
      <span >Inbox </span>
      <span className='bubble'>4</span>
     </div>
     <div className='item'>
     <Image  src={drive} height="5px" width="5px"/>
      <span>Drive Files</span>
      <span className='bubble'>435</span>
     </div>
     <div className='item'>
     <Image  src={board} height="5px" width="5px"/>
      <span>Board</span>
      <span className='bubble'>5</span>
     </div>
     <div className='item'>
     <Image  src={updates} height="5px" width="5px"/>
      <span>Updates</span>
     </div>
     <div className='item'>
     <Image  src={analytic} height="5px" width="5px"/>
      <span>Analytics</span>
      <span className='bubble'>3</span>
     </div>
     <div className='item'>
     <Image  src={crm} height="5px" width="5px"/>
      <span>CRM Dashboard</span>
      <span className='bubble'>2</span>
     </div>
     <div className='item'>
     <Image  src={ecommerce} height="5px" width="5px"/>
      <span>Ecommerce</span>
     </div>
     <div className='item'>
     <Image  src={cryptocurrency} height="5px" width="5px"/>
      <span>Cryptocurrency</span>
     </div>
     <div className='item'>
     <Image  src={projects} height="5px" width="5px"/>
      <span>Projects</span>
     </div>
     <div className='item'>
     <Image  src={nft} height="5px" width="5px"/>
      <span>NFT Marketplace</span>
     </div>
     <div className='item'>
     <Image  src={setting} height="5px" width="5px"/>
      <span>Setting</span>
      <span className='bubble'>2</span>
     </div>
    </div>
    <hr />
    <div className="menu">
    <div className='item'>
      
      <span className='dash'>Projects</span>
      <Image className='uparrow' src={uparrow} height="5px" width="5px"/>
     </div>
     <div className='item'>
     <Image  src={hash} height="5px" width="5px"/>
      <span>Additional calender</span>
      <span className='bubble'>6</span>
     </div>
     <div className='item'>
     <Image  src={hash} height="5px" width="5px"/>
      <span>Brand Logo Design</span>
      <span className='bubble'>11</span>
     </div>
     <div className='item'>
     <Image  src={hash} height="5px" width="5px"/>
      <span>User Research</span>
     </div>
     <div className='item'>
     <Image  src={hash} height="5px" width="5px"/>
      <span>Marketing Sales</span>
      <span className='bubble'>23</span>
     </div>
     <div className='item'>
     <Image  src={hash} height="5px" width="5px"/>
      <span>New Project Template</span>
      <span className='bubble'>2</span>
     </div>
     <div className='item'>
     <Image  src={plus} height="5px" width="5px"/>
      <span>Add New Project</span>
     </div>
    </div>
   </div>
  </div>
 )
}

export default LeftBar