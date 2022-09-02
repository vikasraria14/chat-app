import { useSelector,useDispatch } from "react-redux";
import Card from "react-bootstrap/Card";
import '../Combined/Right.css'
import person from './Assets/person.png';
import mail from './Assets/mail.png';
import archive from './Assets/archive.png'
import Henry from '../../Assets/Henry.png'
import Christine from '../../Assets/Christine Reid.png'
import Jerry from '../../Assets/Jerry Guzmen.png'
import Martha from '../../Assets/Martha.png'
import Phillip from '../../Assets/Phillip Tucker.png'
import Russell from '../../Assets/Russel Williams.png'
import { changeArchive } from "../../../Reducers/chatsReducer";
const UserInfoCard = () => {
  const users=useSelector(state=>state.chat)
  const SelectedUser=users.find(user=>user.selected);
  const photos=[Henry,Martha,Phillip,Christine,Jerry,Russell]
  const id=SelectedUser.id;
  const dispatch=useDispatch()
  const toggleArchive=()=>{
    console.log("clicked")
    dispatch(changeArchive(id))
  }

  return (
    <div className="UserInfoWrapper">
      <Card className="Card" style={{ width: "100%" }}>
       <div>
       <Card.Img className="avatar1"  src={photos[id-1]} />
       </div>
       <div className="info">
        <img src={mail} className="Details" alt=""/>

        {SelectedUser.mail} <br/>
        <img src={person} className="Details" alt=""/>
        {SelectedUser.name}
       </div>
       <button  onClick={toggleArchive}  className="butn">{SelectedUser.archived?"Unarchive ":"Archive "} <img src={archive} className="Details" alt="" /></button>{' '}
      </Card>
    </div>
  );
};
export default UserInfoCard;
