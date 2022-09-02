import Left from "../Left/Combined/Left";
import Middle from "../Middle/Combined/Middle";
import Right from "../Right/Combined/Right";
import "./AllCombined.css";
import { useSelector } from "react-redux";
const AllCombined = () => {
  const show = useSelector((state) => state.showRightPanel);
  if (show) {
    return (
      <div className="AllCombined">
        <Left />
        <Middle />
        <Right />
      </div>
    );
  } else {
    return (
      <div className="AllCombined">
        <Left />
        <Middle />
      </div>
    );
  }
};
export default AllCombined;
