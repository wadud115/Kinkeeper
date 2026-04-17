import React from "react";

const Historylist = ({ timeline }) => {
  const getIcon = (type) => {
    if (type === "call") return "📞";
    if (type === "text") return "💬";
    if (type === "video") return "🎥";
  };

  return (

    <div className="w-10/12 mx-auto">


        <div className="space-y-4">
      <h2 className="text-2xl font-bold">Timeline</h2>

      {timeline.length === 0 && (
        <p className="text-gray-400">No activity yet</p>
      )}

      {timeline.map((item) => (
        <div
          key={item.id}
          className="flex items-center gap-4 bg-white p-4 rounded-xl shadow"
        >
          <span className="text-2xl">{getIcon(item.type)}</span>

          <div>
            <p className="font-semibold">
              {item.type} with {item.name}
            </p>
            <p className="text-sm text-gray-500">{item.date}</p>
          </div>
        </div>
    
      ))}
    </div>
    </div>
    
    



  );
};

export default Historylist;