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

  const COLORS = ["#000080", "#6FCF97", "#1F6F5F"];

  const total =  textCount + callCount + videoCount;

  return (

    <div className="w-11/12 mx-auto mt-20 ">
            <h2 className="text-4xl text-green-900 font-bold mb-6 ml-25">
       Friendship Analytics
      </h2>

    <div className="flex flex-col items-center rounded-xl justify-center p-10 bg-gray-50 shadow-sm min-h-screen w-10/12 mx-auto my-10">

      
   <h3 className="text-xl text-green-700 font-semibold text-left">By Interaction Type</h3>
      <div className="relative">

       
        <PieChart width={350} height={350}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={80}   
            outerRadius={120}
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index]} />
            ))}
          </Pie>

          <Tooltip />
          <Legend />
        </PieChart>

       
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <p className="text-sm text-gray-500">Total</p>
          <p className="text-2xl font-bold">{total}</p>
        </div>

      </div>
    </div>

    </div>


  );
};

export default PieChartPage;