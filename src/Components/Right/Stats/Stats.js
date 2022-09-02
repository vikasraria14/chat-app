import Card from "react-bootstrap/Card";
import '../Combined/Right.css'
import './Stats.css'
import calander from './assets/Calander.png'
import time from './assets/time.ico'
import rejected from './assets/rejected.ico'
import attend from './assets/attend.png'
import meeting from './assets/meeting.ico'
const Stats = () => {
  return (
    <div className="StatsWrapper">
      <Card className="Card" style={{ width: "100%" }}>
        <div className=" TileWrapper">
          <div className="MakeFlex SmallTileWrapper">
            <div className="MakeFlex Tiles Time">
              <div className="logo"><img src={time} className='avatar2' alt="img"/></div>
              <div>
                <div className="Time1">13h</div>
                <div>Time</div>
              </div>
            </div>
            <div className="MakeFlex Tiles Attended">
            <div className="logo"><img src={attend} className='avatar2' alt="img"/></div>
              <div >
                <div className="Attended1">188</div>
                <div>Attended</div>
              </div>
            </div>
          </div>
          <div className="MakeFlex SmallTileWrapper">
            <div className="MakeFlex Tiles Meeting">
            <div className="logo"><img src={meeting} className='avatar2' alt="img"/></div>
              <div >
                <div className="Meeting1">119</div>
                <div>Meetings</div>
              </div>
            </div>
            <div className="MakeFlex Tiles Rejected">
            <div className="logo"><img src={rejected} className='avatar2' alt="img"/></div>
              <div >
                <div className="Rejected1">41</div>
                <div>Rejected</div>
              </div>
            </div>
          </div>
        </div>
        <div className="Graph">
          <img src={calander} alt="img"/>
        </div>
      </Card>
    </div>
  );
};
export default Stats;
