import Bill from '../../Assets/Bill Bradford.png'
import active from './active.png'
import { useSelector } from 'react-redux'
import away from './away.png'
const User1=({message})=>{
    const isActive=useSelector(state=>state.userIsActive)
    if(isActive){
        return(
            <div className="User1">
                <div className="Message1">
                    <div className="User1Message">{message}</div>
                    <div className="User1Time"><img src={Bill} alt="" className="avatar"/><img alt="" className='dot' src={active} /></div>
                </div>
                <div className="User1Image">9h ago</div>
            </div>
        )
    }
    else
    {
        return(
            <div className="User1">
                <div className="Message1">
                    <div className="User1Message">{message}</div>
                    <div className="User1Time"><img src={Bill} alt="" className="avatar"/><img alt="" className='dot' src={away} /></div>
                </div>
                <div className="User1Image">9h ago</div>
            </div>
        )
    }
    
}
export default User1;