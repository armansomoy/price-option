import React from "react";
import { LineChart as Lchart,XAxis, Line } from "recharts";

const LineChart = () => {
  const mathMarksData = [
    { 
        student: 'Student 1', 
        math: 85,
        physics: 78,
        chemistry: 92 
      },
      { 
        student: 'Student 2', 
        math: 78,
        physics: 85,
        chemistry: 75 
      },
      { 
        student: 'Student 3', 
        math: 92,
        physics: 88,
        chemistry: 90 
      },
      { 
        student: 'Student 4', 
        math: 68,
        physics: 72,
        chemistry: 65 
      },
      { 
        student: 'Student 5', 
        math: 75,
        physics: 80,
        chemistry: 70 
      },
      { 
        student: 'Student 6', 
        math: 88,
        physics: 92,
        chemistry: 85 
      },
      { 
        student: 'Student 7', 
        math: 80,
        physics: 78,
        chemistry: 82 
      },
      { 
        student: 'Student 8', 
        math: 72,
        physics: 75,
        chemistry: 68 
      },
      { 
        student: 'Student 9', 
        math: 95,
        physics: 90,
        chemistry: 88 
      },
      { 
        student: 'Student 10', 
        math: 82,
        physics: 85,
        chemistry: 78 
      }
  ];

  return (
    <div>
      <Lchart width={800} height={500} data={mathMarksData}>
      <XAxis dataKey="student" />
        <Line dataKey="math"></Line>
        <Line dataKey="physics" stroke="red"></Line>
        <Line dataKey="chemistry" stroke="yellow"></Line>
      </Lchart>
    </div>
  );
};

export default LineChart;
