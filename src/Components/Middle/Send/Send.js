import './Send.css'
import attached from './attached.png'
import {useDispatch} from 'react-redux'
import { appendChat } from '../../../Reducers/chatsReducer';
const Send=()=>{
    const dispatch=useDispatch();
    const addChat=(event)=>{
        event.preventDefault();
        const x={
            from:"User1",
            message:event.target.TypedMessage.value,
            time:9
        }
        console.log(x);
        dispatch(appendChat(x));
        event.target.TypedMessage.value=" ";
        //ChatData=ChatData[0].chat.concat(x)
    }
    return(
        <div className='SendWrapper'>

            <form onSubmit={addChat}>
                <img src={attached} alt="" className='Details'/>
                <input name='TypedMessage' placeholder='Enter your message here'></input>
                <button className='butn2' >Send</button>
            </form>
            
        </div>
    )
}
export default Send;