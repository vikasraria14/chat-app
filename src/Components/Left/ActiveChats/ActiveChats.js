import { useDispatch, useSelector } from "react-redux";
import expand from "../../Assets/expand.png";
import contract from "../../Assets/contract.png";
import { toggleActive } from "../../../Reducers/ActiveChatReducer";
import Chats from "./Chats";
const ActiveChats = () => {
  // console.log(ChatData[0])
  const dispatch = useDispatch();
  const toggle = () => {
    dispatch(toggleActive());
  };
  const show = useSelector((state) => state.showActiveChat);
  const x = useSelector((state) => state.chat);
  const y = x.filter((x1) => !x1.archived);
  const z = y.length;

  if (show) {
    return (
      <div className="ActiveChatsWrapper">
        <div onClick={toggle} className="MakeFlex wide">
          <div className="heading">
            <h6>Active Chats</h6>
          </div>
          <div className="count">{z}</div>
          <div className="drop1">
            <img src={contract} alt="" className="Details" />
          </div>
        </div>
        <Chats />
      </div>
    );
  } else {
    return (
      <div className="ActiveChatsWrapper">
        <div onClick={toggle} className="MakeFlex wide">
          <div className="heading">
            <h6>Active Chat</h6>
          </div>
          <div className="count">{z}</div>
          <div className="drop1">
            <img src={expand} alt="" className="Details" />
          </div>
        </div>
        <Chats />
      </div>
    );
  }
};
export default ActiveChats;
