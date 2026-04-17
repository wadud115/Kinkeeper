

import History from "../../component/Historylist/Historylist";

import { useContext } from "react";
import { TimelineContext } from "../../context/TimelineContext";


const Timeline = () => {
  const { timeline } = useContext(TimelineContext);

  return (
    <div className="p-6">
      <History timeline={timeline} />
    </div>
  );
};

export default Timeline;





