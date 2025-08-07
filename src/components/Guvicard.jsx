 import Topcontent from "./Topcontent";
 import Middlecontent from "./Middlecontent";
 import Bottomcontent from "./Bottomcontent";
import Buttoncard from "./Buttoncard";


 export default function GuviCard({ courseDetails,setTotalIntrested,totalIntrested }) {
    function convertEpochToTime(epoch) {
      let milliseconds = epoch * 1000;
      let newDate = new Date(milliseconds);
      return newDate.toLocaleTimeString().slice(0, 5);
    }
    function getType(type) {
      if (type == "WE") {
        return "Week End";
      } else if (type == "WD") {
        return "Weed Day";
      } else {
        return "NIL";
      }
    }
  
    return (
      <div className="guvi-card">
        <Topcontent
          courseDetails={courseDetails}
          convertEpochToTime={convertEpochToTime}
        />
        <Middlecontent courseDetails={courseDetails} setTotalIntrested={setTotalIntrested}
        totalIntrested={totalIntrested}/>
        <Buttoncard/>
        <Bottomcontent courseDetails={courseDetails} getType={getType} />
      </div>
    );
  }
  