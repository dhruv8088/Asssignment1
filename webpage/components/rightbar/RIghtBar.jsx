import Image from 'next/image'
import Cross from '../../assets/Cross.svg'
import rightarrow from '../../assets/rightarrow.svg'

const RightBar = () => {
 return (
  <div className='rightBar'>
   <div className='container'>
    <div className="item">
    <div className="user">
    <div className="userInfo">
    <Image src={Cross}/>
    </div>
     </div>
     <div className="user" id="u">
      <div className="userInfo">
       <img
        src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
        alt=""
       />
      </div>
      
     </div>
     <div className="user">
      <div className="userInfo">
      <img
        src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
        alt=""
       />
      </div>
      
     </div>
     <div className="user">
      <div className="userInfo">
      <img
        src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
        alt=""
       />
      </div>
      
     </div>
     <div className="user">
      <div className="userInfo">
      <img
        src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
        alt=""
       />
      </div>
      
     </div>
     <div className="user">
      <div className="userInfo">
      <img
        src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
        alt=""
       />
      </div>
      
     </div>
     <div className="user">
      <div className="userInfo">
      <img
        src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
        alt=""
       />
      </div>  
     </div>
     <div className="user">
      <div className="userInfo">
      <img
        src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
        alt=""
       />
      </div>
     </div>
     <div className="user" id="u">
      <div className="userInfo">
      <Image src={rightarrow}/>
      </div>
     </div>
    </div>
    </div>
   </div>
  
 )
}

export default RightBar