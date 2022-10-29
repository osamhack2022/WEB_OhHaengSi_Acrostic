import { useEffect, useState } from "react";
import { Bar, Pie } from "react-chartjs-2";
import { getWorkShareByRank, WorkShareByRank } from "../../lib/api/stats";
import { rankToString } from "../../lib/helpers/common";

export default function () {
  const [stats, setStats] = useState<WorkShareByRank>([]);

  useEffect(() => {
    getWorkShareByRank().then((data) => setStats(data));
  }, []);

  return (
    <Pie
      data={{
        labels: stats.map((value) => rankToString(value.soldier_rank)),
        datasets: [
          {
            label: "# of Votes",
            data: stats.map((value) => value.count),
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
          },
        ],
      }}
    />
  );
}
