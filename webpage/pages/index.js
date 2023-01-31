import LeftBar from '@/components/leftbar/LeftBar'
import NavBar from '@/components/navbar/NavBar'
import RightBar from '@/components/rightbar/RIghtBar'

import MainContainer from '@/components/MainContainer'

export default function Home() {


  return (
    <div >
        <div style={{display:"flex"}}>
          <LeftBar/>
          <div style={{display:"flex",gap:"5px", flex:"8", width:"100%" ,flexDirection:"column"}}>
          <NavBar style={{flex:"2"}}/>
          <div style={{flex:"8"}}>
            <MainContainer/>
          </div>
          </div>
          <RightBar/>
        </div>
        </div>
  )
}
