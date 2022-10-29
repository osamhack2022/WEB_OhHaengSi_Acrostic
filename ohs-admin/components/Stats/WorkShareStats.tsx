import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { getWorkShare, WorkShare } from "../../lib/api/stats";

export default function () {
  const [stats, setStats] = useState<WorkShare>([]);

  useEffect(() => {
    getWorkShare().then((data) => setStats(data));
  }, []);

  return (
    <Bar
      data={{
        labels: stats.map((value) => value.soldier_name),
        datasets: [
          {
            label: "근무 투입 횟수",
            data: stats.map((value) => value.count),
            backgroundColor: [
              "rgba(100, 99, 132, 0.5)",
              "rgba(255, 99, 132, 0.5)",
              "rgba(54, 162, 235, 0.5)",
            ],
          },
        ],
      }}
    />
  );
}
