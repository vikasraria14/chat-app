import Chats from "../Chats/Chats";
import Send from "../Send/Send";
import "./Middle.css";
import { useSelector } from "react-redux";
const Middle = () => {
  const show = useSelector((state) => state.showRightPanel);

  if (show) {
    return (
      <div className="MiddleWrapper">
        <Chats />
        <Send />
      </div>
    );
  } 
  else
   {
    return (
      <div className="MiddleWrapper1">
        <Chats />
        <Send />
      </div>
    );
  }
};
export default Middle;
