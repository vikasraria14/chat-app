import Card from "react-bootstrap/Card";
import ToggleSwitch from "./ToggleSwitch";
import "./UserInfoCard.css"
import UserImage from '../../Assets/Bill Bradford.png'
import settings from '../../Assets/settings.png'
const UserInfoCard = () => {
  return (
    <div className="UserInfoCardWrapper">
      <Card className="Card" style={{ width: "100%" }}>
        
        <Card.Body>
        <Card.Img className="avatar1"  src={UserImage} />
          <Card.Title>Bill Bradford <img src={settings} alt="" className="Details" /></Card.Title>
          <Card.Text>
            Senior React Developer
            
          </Card.Text>
          <ToggleSwitch label="Active" />
          
        </Card.Body>
      </Card>
    </div>
  );
};
export default UserInfoCard;
