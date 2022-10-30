import { GetStaticProps, NextPage } from "next";
import ContentCard from "../../components/common/card/ContentCard";
import Table from "../../components/common/Table";
import Layout from "../../components/Layout/Layout";
import useCleaning, { Cleaning } from "./useCleaning";

const CleaningPage: NextPage = () => {
  const {
    byRoom,
    inRoom,
    Area,
    addArea,
    updateArea,
    delRoom,
    onChange,
    YMDDate,
    addDate,
    chDate,
    chRoomId,
  } = useCleaning();

  return (
    <Layout>
      <div className="input-group">
        <button
          type="button"
          className="btn btn-primary btn-lg offset-2"
          onClick={() => addDate(-1)}
        >
          &lt;
        </button>
        <input
          type="text"
          className="input-group-text col-2 offset-1"
          value={YMDDate()}
          onChange={chDate}
        />
        <select className="input-group-text col-2 offset-1" onChange={chRoomId}>
          <option value="1">1생활관</option>
          <option value="2">2생활관</option>
          <option value="3">3생활관</option>
          <option value="4">4생활관</option>
          <option value="5">5생활관</option>
        </select>
        <button
          type="button"
          className="btn btn-primary btn-lg offset-1"
          onClick={() => addDate(1)}
        >
          &gt;
        </button>
      </div>
      <br />
      <ContentCard className="col-xl-12" title="생활관 별 담당구역">
        <Table
          headers={["구분", "1주차", "2주차", "3주차", "4주차"]}
          items={byRoom}
          itemMapper={(item) => item}
        />
        <form>
          <div className="form-group">
            <label className="form-label">담당 구역 명</label>
            <input
              type="text"
              className="form-control "
              value={Area.byRoom}
              onChange={(e) => onChange("byRoom", e)}
            />
          </div>
          <button
            type="button"
            className="btn btn-primary btn-lg col-3 offset-4_5"
            onClick={() => addArea("byRoom")}
          >
            구역 추가
          </button>
        </form>
      </ContentCard>
      <ContentCard className="col-xl-12" title="생활관 내 담당구역">
        <Table
          headers={[
            "구분",
            "1주차 정",
            "2주차 정",
            "3주차 정",
            "4주차 정",
            "1주차 부",
            "2주차 부",
            "3주차 부",
            "4주차 부",
          ]}
          items={inRoom}
          itemMapper={(item) => item}
        />
        <form>
          <div className="form-group">
            <label className="form-label">담당 구역 명</label>
            <input
              type="text"
              className="form-control "
              value={Area.inRoom}
              onChange={(e) => onChange("inRoom", e)}
            />
          </div>
          <button
            type="button"
            className="btn btn-primary btn-lg col-3"
            onClick={() => addArea("inRoom")}
          >
            구역 추가
          </button>
          <button
            type="button"
            className="btn btn-primary btn-lg col-3 offset-1_2"
            onClick={() => updateArea()}
          >
            구역 변경
          </button>
          <button
            type="button"
            className="btn btn-primary btn-lg col-3 offset-1_2"
            onClick={() => delRoom()}
          >
            초기화
          </button>
        </form>
      </ContentCard>
    </Layout>
  );
};

export default CleaningPage;
