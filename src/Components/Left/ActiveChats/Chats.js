import {useSelector,useDispatch} from 'react-redux'
import { toggleChosen } from '../../../Reducers/chatsReducer';
import { toggleRight } from '../../../Reducers/RightPanelReducer';
import Henry from '../../Assets/Henry.png'
import Christine from '../../Assets/Christine Reid.png'
import Jerry from '../../Assets/Jerry Guzmen.png'
import Martha from '../../Assets/Martha.png'
import Phillip from '../../Assets/Phillip Tucker.png'
import Russell from '../../Assets/Russel Williams.png'
const ShowNames=({chat1})=>{
    const dispatch=useDispatch();
    const show=useSelector(state=>state.showRightPanel)
    const photos=[Henry,Martha,Phillip,Christine,Jerry,Russell]
    const id=chat1.id
    console.log("Hi I am id",id)
    const toggleSelected=(name)=>{
         const x=()=>{
            console.log(name)
            dispatch(toggleChosen(name))
            if(show) 
            {
                dispatch(toggleRight())
            }
            
        }
        return x;
    }
    if(chat1.selected)
    {
        return(
            <p key={chat1.name} className="Selected list"><img alt="" className="avatar10"  src={photos[id-1]} />{chat1.name}</p>
        )
    }
    else
    {
        
        return(
            <p key={chat1.name}  onClick={toggleSelected(chat1.name)} className="NotSelected list"><img alt="" className="avatar10"  src={photos[id-1]} />{chat1.name}</p>
        )
    }
}

const Chats=()=>{
    const show=useSelector(state=>state.showActiveChat)
    const x=useSelector(state=>state.chat)
    const ChatData=x.filter(x1=>!x1.archived)
    console.log(ChatData)
    //const show=true;
    if(show)
    {
        
        return(
            <div>
                {ChatData.map(chat1=><ShowNames key={chat1.name} id={ChatData.id} chat1={chat1}/>)}
    
            </div>
        )
    }
    else
    {
        return (<></>)
    }
}

export default Chats;