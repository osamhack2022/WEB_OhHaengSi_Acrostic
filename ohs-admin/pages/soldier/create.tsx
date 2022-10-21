import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";
import ContentCard from "../../components/common/card/ContentCard";
import Layout from "../../components/Layout/Layout";
import SoldierForm, {
  SoldierFormData,
} from "../../components/Soldier/SoldierForm";
import { createSoldier } from "../../lib/api/soldiers";

const SoldierCreatePage = () => {
  const router = useRouter();
  const submitAction: SubmitHandler<SoldierFormData> = (data) => {
    createSoldier({
      ...data,
      rank: +data.rank,
      roomId: +data.roomId,
    }).then(() => {
      alert("생성완료");
      router.push("/soldier");
    });
  };

  return (
    <Layout>
      <div className="row justify-content-center">
        <ContentCard className="col-xl-6 col-md-8" title="병사 추가">
          <SoldierForm submitAction={submitAction} />
        </ContentCard>
      </div>
    </Layout>
  );
};

export default SoldierCreatePage;
