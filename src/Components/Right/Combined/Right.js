import Promotion from "../Promotion/Promotion";
import UserInfoCard from "../SelectedUser/UserInfoCard";
import Stats from "../Stats/Stats";
import './Right.css'

const Right=()=>{
    return (
        <div className="RightWrapper ">
            <UserInfoCard/>
            <Stats/>
            <Promotion/>
        </div>
    )
}
export default Right;