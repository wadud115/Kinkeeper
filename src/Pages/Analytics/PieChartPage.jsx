import { useContext } from "react";
import { TimelineContext } from "../../context/TimelineContext";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const PieChartPage = () => {
  const { timeline } = useContext(TimelineContext);

  
  const callCount = timeline.filter((item) => item.type === "call").length;
  const textCount = timeline.filter((item) => item.type === "text").length;
  const videoCount = timeline.filter((item) => item.type === "video").length;

  const data = [
    { name: "Call", value: callCount },
    { name: "Text", value: textCount },
    { name: "Video", value: videoCount },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FF8042"];

  return (
    <div className="flex flex-col items-center justify-center p-10">
      <h2 className="text-2xl font-bold mb-6">
        Activity Distribution
      </h2>

      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={120}
          dataKey="value"
          label
        >
          {data.map((entry, index) => (
            <Cell key={index} fill={COLORS[index]} />
          ))}
        </Pie>

        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default PieChartPage;