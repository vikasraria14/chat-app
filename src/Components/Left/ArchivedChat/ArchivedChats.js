import {useDispatch,useSelector} from 'react-redux'
import expand from '../../Assets/expand.png'
import contract from '../../Assets/contract.png'
import { toggleArchived } from '../../../Reducers/ArchivedChatReducer' 
import Chats from './Chats'
const ArchivedChats=()=>{
    
   // console.log(ChatData[0])
   const dispatch=useDispatch()
   const toggle=()=>{
    console.log("cilckedW")
    dispatch(toggleArchived())


  }
  const x=useSelector(state=>state.chat)
  const y=x.filter(x1=>x1.archived)
  const z=y.length
  const show=useSelector(state=>state.showArchivedChat)
  if(show)
  {
    return(
        <div className="ArchivedChatsWrapper">
            <div onClick={toggle} className='MakeFlex wide'>
                <div className='heading'>
                    <h6 >Archived Chats</h6>                    
                </div>
                <div className='count'>
                    {z}
                </div>
                <div className='drop'>
                    <img src={contract} alt="" className='Details'/>
                </div>
                
            </div>
            <Chats/>
            
        </div>
    )
  }
  else
  {
    return(
        <div className="ArchivedChatsWrapper">
            <div onClick={toggle} className='MakeFlex wide'>
                <div className='heading'>
                    <h6 >Archived Chats</h6>                    
                </div>
                <div className='count'>
                    {z}
                </div>
                <div className='drop'>
                    <img src={expand} alt="" className='Details'/>
                </div>
                
            </div>
            
            <Chats/>
            
        </div>
    )
  }
}
export default ArchivedChats;