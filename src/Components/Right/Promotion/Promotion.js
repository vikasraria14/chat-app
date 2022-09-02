import Card from "react-bootstrap/Card";
import '../Combined/Right.css'
import plane from './paper-plane.png'
import link from './link.ico'
const Promotion = () => {
  return (
    <div className="PromotionWrapper">
      
      <Card className="Card" style={{ width: "100%" ,"padding-top": "9%"}}>
        
      <img src={plane} className="plane" alt=""/>
        <h6>Onboard Client</h6>
          <p>
           Share the link with prospects and discuss all stuff
           </p>
          
          <button  className="butn1">Copy Link <img className="Details" src={link} alt="" /></button>
        
      </Card>
    </div>
  );
};
export default Promotion;
