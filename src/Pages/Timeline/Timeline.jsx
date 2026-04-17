import { useState, useContext } from "react";
import { TimelineContext } from "../../context/TimelineContext";
import History from "../../component/Historylist/Historylist";

const Timeline = () => {
  const { timeline } = useContext(TimelineContext);

  const [filter, setFilter] = useState("all");

  // filter logic
  const filteredData =
    filter === "all"
      ? timeline
      : timeline.filter((item) => item.type === filter);

  return (
    <div className="p-6">

      {/* 🔥 Dropdown Filter */}
      <div className="mb-6">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="w-full md:w-1/3 p-3 rounded-xl border bg-gray-100 text-gray-600"
        >
          <option value="all">Filter timeline</option>
          <option value="call">📞 Call</option>
          <option value="text">💬 Text</option>
          <option value="video">🎥 Video</option>
        </select>
      </div>

      {/* Timeline */}
      <History timeline={filteredData} />
    </div>
  );
};

export default Timeline;