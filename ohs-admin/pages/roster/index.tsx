import { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import ContentCard from "../../components/common/card/ContentCard";
import Table from "../../components/common/Table";
import Layout from "../../components/Layout/Layout";
import {
  createRoster,
  getRosters,
  IRosterListItem,
} from "../../lib/api/roster";
import { dateToString } from "../../lib/helpers/common";

interface IRosterPageProps {
  rosters: IRosterListItem[];
}

const RosterPage: NextPage<IRosterPageProps> = ({ rosters }) => {
  const [date, setDate] = useState("");
  const router = useRouter();

  return (
    <Layout>
      <ContentCard className="col-auto" title="근무표 목록">
        <Table
          headers={["번호", "근무일자", "기타"]}
          itemMapper={(item, index) => {
            const date = dateToString(item.targetDate);
            return [
              index + 1,
              <Link href={`/roster/${date}`}>{date}</Link>,
              "",
            ];
          }}
          items={rosters}
        />
        <div className="row justify-content-end">
          <div className="col-2">
            <input
              type="date"
              className="form-control"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="col-2">
            <button
              type="button"
              className="btn btn-primary btn-block"
              onClick={() => {
                if (!date) {
                  alert("날짜를 선택해주세요.");
                  return;
                }

                createRoster(date).then((res) => {
                  if (res.statusCode == 409) {
                    alert("이미 생성된 근무표 입니다.");
                    return;
                  }
                  alert("근무표 생성 완료");
                  router.reload();
                });
              }}
            >
              근무표 생성
            </button>
          </div>
        </div>
      </ContentCard>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<IRosterPageProps> = async (
  context
) => {
  const rosters = await getRosters();

  return {
    props: {
      rosters,
    },
  };
};

export default RosterPage;
