import { createContext, useState } from "react";

export const TimelineContext = createContext();

const TimelineProvider = ({ children }) => {
  const [timeline, setTimeline] = useState([]);

  const addActivity = (type, name) => {
    const newItem = {
      id: Date.now(),
      type,
      name,
      date: new Date().toLocaleDateString(),
    };

    setTimeline((prev) => [newItem, ...prev]);
  };

  return (
    <TimelineContext.Provider value={{ timeline, addActivity }}>
      {children}
    </TimelineContext.Provider>
  );
};

export default TimelineProvider;