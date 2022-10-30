import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { useState, useEffect } from "react";
import { SoliderStatusStats, getSoldierStatus } from "../../lib/api/stats";
import SummaryCard from "../common/card/SummaryCard";

export default function () {
  const [stats, setStats] = useState<SoliderStatusStats>([]);
  const [total, setTotal] = useState(0);
  const [cur, setCur] = useState(0);

  useEffect(() => {
    getSoldierStatus().then((data) => {
      setTotal(data.reduce((prev, cur) => prev + parseInt(cur.count), 0));
      let curIndex = data.findIndex((value) => value.status == "열중");
      if (curIndex > -1) setCur(+data[curIndex].count);
    });
  }, []);

  return (
    <>
      <SummaryCard title="총원" icon={solid("calendar")} themeName="primary">
        {total} 명
      </SummaryCard>
      <SummaryCard title="열외" icon={solid("dollar")} themeName="success">
        {total - cur} 명
      </SummaryCard>
      <SummaryCard title="현재원" icon={solid("comment")} themeName="warning">
        {cur} 명
      </SummaryCard>
      <SummaryCard
        title="출타율"
        icon={solid("clipboard-list")}
        themeName="info"
      >
        <div className="row no-gutters align-items-center">
          <div className="col-auto">
            <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">
              {Math.floor(((total - cur) / total) * 100)}%
            </div>
          </div>
          <div className="col">
            <div className="progress progress-sm mr-2">
              <div
                className="progress-bar bg-info"
                role="progressbar"
                style={{ width: `${((total - cur) / total) * 100}%` }}
                aria-valuenow={total - cur}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
          </div>
        </div>
      </SummaryCard>
    </>
  );
}
