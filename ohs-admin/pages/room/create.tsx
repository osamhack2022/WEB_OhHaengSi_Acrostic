import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";
import ContentCard from "../../components/common/card/ContentCard";
import Layout from "../../components/Layout/Layout";
import RoomForm, { RoomFormData } from "../../components/Room/RoomForm";
import { createRoom } from "../../lib/api/room";

const RoomCreatePage = () => {
  const router = useRouter();
  const submitAction: SubmitHandler<RoomFormData> = (data) => {
    const { id, name } = data;
    createRoom({
      id,
      name,
    }).then(() => {
      alert("생성완료");
      router.push("/room");
    });
  };

  return (
    <Layout>
      <div className="row justify-content-center">
        <ContentCard className="col-xl-6 col-md-8" title="생활관 추가">
          <RoomForm submitAction={submitAction} />
        </ContentCard>
      </div>
    </Layout>
  );
};

export default RoomCreatePage;
