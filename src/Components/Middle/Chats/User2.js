import {useDispatch} from 'react-redux'
import { toggleRight } from "../../../Reducers/RightPanelReducer";
import Henry from '../../Assets/Henry.png'
import Christine from '../../Assets/Christine Reid.png'
import Jerry from '../../Assets/Jerry Guzmen.png'
import Martha from '../../Assets/Martha.png'
import Phillip from '../../Assets/Phillip Tucker.png'
import Russell from '../../Assets/Russel Williams.png'
const User2=({chat,id})=>{
    const dispatch=useDispatch()
    const message=chat.message
    const toggle=()=>{
        dispatch(toggleRight())
    }

    const photos=[Henry,Martha,Phillip,Christine,Jerry,Russell]

   // console.log(url, typeof(url))
   //const x=encodeURIComponent(url)
    //const x=".."+/+".."+/+"Assets"/"Martha.png"
   // console.log(x,typeof(x))
   // const url='../../Assets/Russel Williams.png'
   //const url =`../../Assets/${name}.png`
  // name=chat.name 
    return(
        <div className="User2">

            <div className="User2Image"><img onClick={toggle} src={photos[id-1]} alt="" className="avatar"/></div>
            <div className="Message">
                <div className="User2Message">{message}</div>
                <div className="User2Time">9h ago</div>
            </div>
        </div>
    )
}
export default User2;